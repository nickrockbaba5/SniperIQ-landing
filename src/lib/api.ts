/**
 * FINSCAN Research API Client
 * All research intelligence endpoints
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.finscan.uk';

export interface EquityIntelligence {
  symbol: string;
  company: {
    name: string;
    sector: string;
    industry: string;
    country: string;
    exchange: string;
  };
  price: {
    current: number;
    change_1d: number;
    currency: string;
  };
  finscan_intelligence: {
    overall_score: number;
    rating: string;
    confidence: string;
    last_updated: string;
  };
  fundamentals: {
    quality: any;
    growth: any;
    value: any;
    health: any;
  };
  smart_money: {
    overall_score: number;
    rating: string;
    confidence: string;
    institutional: any;
    insider: any;
    etf_exposure: any;
    summary: string;
  };
  valuation: {
    overall_signal: string;
    target_price: number;
    upside_pct: number;
    recommendation: string;
    dcf: any;
    relative: any;
    scenarios: any;
  };
  data_quality: {
    completeness: number;
    freshness: string;
    last_updated: string;
  };
  disclaimer: string;
}

export interface EquitySummary {
  symbol: string;
  name: string;
  price: number;
  change_pct: number;
  finscan_quick_score: number;
  quality_rating: string;
  value_rating: string;
  last_updated: string;
}

export interface ScreenerResult {
  symbol: string;
  name: string;
  sector: string;
  price: number;
  market_cap: number;
  finscan_score: number;
  pe: number;
  beta: number;
}

export interface ScreenerResponse {
  screener_results: ScreenerResult[];
  count: number;
  filters_applied: any;
  methodology: string;
  last_updated: string;
}

/**
 * Get full equity intelligence
 */
export async function getEquityIntelligence(symbol: string): Promise<EquityIntelligence> {
  const response = await fetch(`${API_BASE_URL}/api/research/equity/${symbol}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch intelligence for ${symbol}`);
  }
  return response.json();
}

/**
 * Get quick equity summary
 */
export async function getEquitySummary(symbol: string): Promise<EquitySummary> {
  const response = await fetch(`${API_BASE_URL}/api/research/equity/${symbol}/summary`);
  if (!response.ok) {
    throw new Error(`Failed to fetch summary for ${symbol}`);
  }
  return response.json();
}

/**
 * Get screener results
 */
export async function getScreenerResults(filters?: {
  min_market_cap?: number;
  max_pe?: number;
  min_roe?: number;
  sector?: string;
  limit?: number;
}): Promise<ScreenerResponse> {
  const params = new URLSearchParams();
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, value.toString());
      }
    });
  }

  const url = `${API_BASE_URL}/api/research/screener${params.toString() ? '?' + params.toString() : ''}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch screener results');
  }
  return response.json();
}
