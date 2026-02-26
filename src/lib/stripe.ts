/**
 * Stripe Payment Service for Landing Page
 * Handles subscription checkout
 */

const API_BASE = import.meta.env.VITE_API_URL || 'https://api.sniperiq.ai'

export type TierName = 'free' | 'starter' | 'pro' | 'advanced' | 'enterprise'

export interface CheckoutSessionResponse {
  sessionId: string
  url: string
}

/**
 * Create a Stripe Checkout session
 */
export async function createCheckoutSession(
  tier: TierName,
  billingPeriod: 'monthly' | 'yearly',
  email?: string,
  currency: 'gbp' | 'usd' = 'gbp'
): Promise<CheckoutSessionResponse> {
  if (tier === 'free' || tier === 'enterprise') {
    throw new Error('No pricing available for tier: ' + tier)
  }

  // Map tier names to backend format
  const tierKey = tier === 'advanced' ? 'advanced' : tier
  const priceIdKey = tierKey + '_' + billingPeriod

  const response = await fetch(API_BASE + '/api/payments/create-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      price_id: priceIdKey,
      currency,
      email: email,
      success_url: 'https://app.sniperiq.ai/settings?payment=success',
      cancel_url: 'https://sniperiq.ai/?payment=cancelled',
    }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.detail || error.message || 'Failed to create checkout session')
  }

  const data = await response.json()
  return {
    sessionId: data.session_id,
    url: data.checkout_url,
  }
}

/**
 * Redirect to Stripe Checkout
 */
export async function redirectToCheckout(
  tier: TierName,
  billingPeriod: 'monthly' | 'yearly',
  email?: string,
  currency: 'gbp' | 'usd' = 'gbp'
): Promise<void> {
  try {
    const session = await createCheckoutSession(tier, billingPeriod, email, currency)
    window.location.href = session.url
  } catch (error) {
    console.error('Checkout error:', error)
    throw error
  }
}
