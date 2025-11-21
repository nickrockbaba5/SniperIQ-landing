'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { getEquityIntelligence, EquityIntelligence } from '@/lib/api';
import { ScoreCard } from '@/components/ScoreCard';
import {
  TrendingUp, Shield, DollarSign, Activity, Building2, Users,
  Target, BarChart3, AlertTriangle, Clock, ArrowUp, ArrowDown
} from 'lucide-react';

export default function ResearchTerminal({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = use(params);
  const { theme } = useTheme();
  const [data, setData] = useState<EquityIntelligence | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'valuation' | 'fundamentals' | 'smart-money' | 'scenarios'>('valuation');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const intelligence = await getEquityIntelligence(symbol.toUpperCase());
        setData(intelligence);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [symbol]);

  const isDark = theme === 'dark';

  if (loading) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className={`h-32 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`h-48 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className={`text-center p-8 rounded-lg ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
          <AlertTriangle className="mx-auto mb-4 text-red-500" size={48} />
          <h2 className="text-xl font-bold mb-2">Failed to Load Data</h2>
          <p>{error || 'Unknown error occurred'}</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'valuation', label: 'Valuation', icon: Target },
    { id: 'fundamentals', label: 'Fundamentals', icon: BarChart3 },
    { id: 'smart-money', label: 'Smart Money', icon: Users },
    { id: 'scenarios', label: 'Scenarios', icon: TrendingUp },
  ] as const;

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className={`rounded-lg p-6 mb-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {data.symbol}
                </h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  data.finscan_intelligence.overall_score >= 70
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : data.finscan_intelligence.overall_score >= 50
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {data.finscan_intelligence.rating}
                </span>
              </div>
              <h2 className={`text-xl mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {data.company.name}
              </h2>
              <div className={`flex items-center gap-4 mt-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <span>{data.company.sector}</span>
                <span>•</span>
                <span>{data.company.industry}</span>
                <span>•</span>
                <span>{data.company.exchange}</span>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${data.price.current.toFixed(2)}
              </div>
              <div className={`flex items-center justify-end gap-1 mt-2 ${
                data.price.change_1d >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {data.price.change_1d >= 0 ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
                <span className="text-lg font-semibold">
                  {(data.price.change_1d * 100).toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FINSCAN Intelligence Score */}
        <div className="mb-6">
          <ScoreCard
            title="FINSCAN Intelligence Score"
            score={data.finscan_intelligence.overall_score}
            rating={data.finscan_intelligence.rating}
            description={`Confidence: ${data.finscan_intelligence.confidence} • Last Updated: ${new Date(data.finscan_intelligence.last_updated).toLocaleString()}`}
            icon={<Activity size={24} />}
          />
        </div>

        {/* Tabs */}
        <div className={`flex gap-2 mb-6 p-1 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? isDark
                      ? 'bg-gray-700 text-white'
                      : 'bg-white text-gray-900 shadow'
                    : isDark
                    ? 'text-gray-400 hover:text-gray-300'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'valuation' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Valuation Signal
              </h3>
              <div className={`text-3xl font-bold mb-2 ${
                data.valuation.overall_signal.includes('Buy') ? 'text-green-500' :
                data.valuation.overall_signal.includes('Sell') ? 'text-red-500' : 'text-yellow-500'
              }`}>
                {data.valuation.overall_signal}
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {data.valuation.recommendation}
              </p>
            </div>

            <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Fair Value (DCF)
              </h3>
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${data.valuation.dcf?.fair_value?.toFixed(2) || 'N/A'}
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Upside: {data.valuation.upside_pct.toFixed(2)}%
              </p>
            </div>

            <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Scenarios
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Bull Case</span>
                  <span className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                    ${data.valuation.scenarios?.bull_case?.toFixed(2) || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Base Case</span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    ${data.valuation.scenarios?.base_case?.toFixed(2) || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Bear Case</span>
                  <span className={`font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                    ${data.valuation.scenarios?.bear_case?.toFixed(2) || 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fundamentals' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScoreCard
              title="Quality Score"
              score={data.fundamentals.quality?.score || 0}
              rating={data.fundamentals.quality?.rating}
              icon={<Shield size={24} />}
            />
            <ScoreCard
              title="Growth Score"
              score={data.fundamentals.growth?.score || 0}
              rating={data.fundamentals.growth?.rating}
              icon={<TrendingUp size={24} />}
            />
            <ScoreCard
              title="Value Score"
              score={data.fundamentals.value?.score || 0}
              rating={data.fundamentals.value?.rating}
              icon={<DollarSign size={24} />}
            />
            <ScoreCard
              title="Health Score"
              score={data.fundamentals.health?.score || 0}
              rating={data.fundamentals.health?.rating}
              icon={<Activity size={24} />}
            />
          </div>
        )}

        {activeTab === 'smart-money' && (
          <div className="space-y-6">
            <ScoreCard
              title="Smart Money Score"
              score={data.smart_money.overall_score}
              rating={data.smart_money.rating}
              description={data.smart_money.summary}
              icon={<Users size={24} />}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Institutional
                </h3>
                <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {data.smart_money.institutional?.score || 'N/A'}
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {data.smart_money.institutional?.signal || 'Unknown'}
                </p>
              </div>

              <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Insider Activity
                </h3>
                <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {data.smart_money.insider?.score || 'N/A'}
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {data.smart_money.insider?.signal || 'Unknown'}
                </p>
              </div>

              <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  ETF Exposure
                </h3>
                <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {data.smart_money.etf_exposure?.total_etfs || 'N/A'}
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  ETFs holding this stock
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scenarios' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`rounded-lg p-6 ${isDark ? 'bg-green-900/20 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 text-green-600 dark:text-green-400`}>
                Bull Case
              </h3>
              <div className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${data.valuation.scenarios?.bull_case?.toFixed(2) || 'N/A'}
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {data.valuation.scenarios?.bull_assumptions || 'Accelerated growth, favorable conditions'}
              </p>
            </div>

            <div className={`rounded-lg p-6 ${isDark ? 'bg-blue-900/20 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400`}>
                Base Case
              </h3>
              <div className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${data.valuation.scenarios?.base_case?.toFixed(2) || 'N/A'}
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {data.valuation.scenarios?.base_assumptions || 'Steady growth, stable conditions'}
              </p>
            </div>

            <div className={`rounded-lg p-6 ${isDark ? 'bg-red-900/20 border border-red-700' : 'bg-red-50 border border-red-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 text-red-600 dark:text-red-400`}>
                Bear Case
              </h3>
              <div className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${data.valuation.scenarios?.bear_case?.toFixed(2) || 'N/A'}
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {data.valuation.scenarios?.bear_assumptions || 'Growth slowdown, unfavorable conditions'}
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`mt-8 p-4 rounded-lg text-center text-sm ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
          {data.disclaimer}
        </div>
      </div>
    </div>
  );
}
