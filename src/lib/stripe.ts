/**
 * Stripe Payment Service for Landing Page
 * Handles subscription checkout
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.sniperiq.ai'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '12345'

export type TierName = 'free' | 'starter' | 'pro' | 'advanced' | 'enterprise'

// Stripe Price IDs mapping
export const STRIPE_PRICE_IDS: Record<TierName, { monthly: string; yearly: string } | null> = {
  free: null,
  starter: {
    monthly: 'price_starter_monthly',
    yearly: 'price_starter_yearly',
  },
  pro: {
    monthly: 'price_pro_monthly',
    yearly: 'price_pro_yearly',
  },
  advanced: {
    monthly: 'price_advanced_monthly', // Maps to institutional in backend
    yearly: 'price_advanced_yearly',
  },
  enterprise: null, // Contact sales
}

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
  email?: string
): Promise<CheckoutSessionResponse> {
  const priceIds = STRIPE_PRICE_IDS[tier]
  if (!priceIds) {
    throw new Error(`No pricing available for tier: ${tier}`)
  }

  // Map tier names to backend format
  const priceIdKey = billingPeriod === 'yearly'
    ? `${tier === 'advanced' ? 'institutional' : tier}_yearly`
    : `${tier === 'advanced' ? 'institutional' : tier}_monthly`

  const response = await fetch(`${API_BASE}/api/payments/create-checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY,
    },
    body: JSON.stringify({
      price_id: priceIdKey,
      email: email,
      success_url: `https://app.sniperiq.ai/dashboard?payment=success`,
      cancel_url: `https://sniperiq.ai/?payment=cancelled`,
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
  email?: string
): Promise<void> {
  try {
    const session = await createCheckoutSession(tier, billingPeriod, email)
    // Redirect to Stripe Checkout
    window.location.href = session.url
  } catch (error) {
    console.error('Checkout error:', error)
    throw error
  }
}
