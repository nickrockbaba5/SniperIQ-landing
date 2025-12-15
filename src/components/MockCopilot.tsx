import { useState, useEffect } from 'react';
import {
  MessageSquare, Brain, Sparkles, Send,
  TrendingUp, Target, FileText, Zap
} from 'lucide-react';

export default function MockCopilot() {
  const [typingText, setTypingText] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const conversations = [
    {
      question: "Compare AAPL vs MSFT fundamental strength",
      response: `**Fundamental Comparison: AAPL vs MSFT**

📊 **Revenue Growth (5Y CAGR)**
• AAPL: 8.2% | MSFT: 14.1%
→ MSFT shows stronger top-line growth

💰 **Profitability Metrics**
• AAPL ROE: 147% | MSFT ROE: 38%
• AAPL Net Margin: 25% | MSFT: 34%

🎯 **Verdict**: AAPL offers superior capital efficiency, MSFT has better growth trajectory. For value: AAPL. For growth: MSFT.`
    },
    {
      question: "Explain the current gamma exposure on SPY",
      response: `**SPY Gamma Analysis** 🎯

📍 **Key Gamma Levels**
• Major Put Wall: $440 (-$2.8B gamma)
• Major Call Wall: $460 (+$3.2B gamma)
• Flip Point: $448 (dealer neutral)

⚡ **Current Positioning**
SPY at $452 → Above flip, dealers are **long gamma**
This means: Volatility suppression, mean reversion

🔮 **Implication**: Expect range-bound price action between $448-$460 until OPEX.`
    },
    {
      question: "What's the ICT setup for NVDA today?",
      response: `**NVDA ICT Analysis** 🎯

🔍 **Smart Money Concepts**
• Order Block: $875-880 (bullish OB from Nov 15)
• Fair Value Gap: $890-895 (unfilled)
• Liquidity Pool: $860 (stop hunt target)

📊 **Current Context**
Price swept Asian highs, now retracing to discount array. Watch for rejection at $880 OB for long entry.

✅ **Trade Setup**
Entry: $878-882 | Stop: $868 | Target: $905
R:R = 2.3:1`
    }
  ];

  const currentConvo = conversations[currentQuestion];

  // Type out the question
  useEffect(() => {
    setTypingText('');
    setShowResponse(false);
    let i = 0;
    const text = currentConvo.question;

    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setTypingText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowResponse(true), 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentQuestion]);

  // Cycle through questions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion(prev => (prev + 1) % conversations.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-red-500/5 animate-pulse" />

      {/* Header */}
      <div className="relative px-4 py-3 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">AI Research Copilot</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-500">Powered by GPT-4 + SniperIQ Context</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-amber-500/20 rounded text-xs text-amber-300 font-medium">
              <Sparkles className="w-3 h-3 inline mr-1" />
              Premium
            </span>
          </div>
        </div>
      </div>

      <div className="relative p-4 sm:p-6 space-y-4">
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2">
          {[
            { icon: TrendingUp, label: 'Compare stocks' },
            { icon: Target, label: 'ICT analysis' },
            { icon: FileText, label: 'Generate report' },
            { icon: Zap, label: 'Trade setup' },
          ].map((action, i) => (
            <button
              key={i}
              className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] border border-white/10 rounded-lg text-xs text-gray-400 hover:bg-white/[0.06] hover:text-white transition-all"
            >
              <action.icon className="w-3 h-3" />
              {action.label}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div className="min-h-[280px] space-y-4">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-[80%] p-4 bg-amber-500/20 border border-amber-500/30 rounded-2xl rounded-tr-md">
              <p className="text-sm text-amber-100">{typingText}</p>
              {typingText.length < currentConvo.question.length && (
                <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse ml-1" />
              )}
            </div>
          </div>

          {/* AI Response */}
          {showResponse && (
            <div className="flex justify-start animate-fadeIn">
              <div className="max-w-[90%] p-4 bg-white/[0.05] border border-white/10 rounded-2xl rounded-tl-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Brain className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs text-gray-400">SniperIQ Copilot</span>
                </div>
                <div className="text-sm text-gray-200 whitespace-pre-line leading-relaxed">
                  {currentConvo.response.split('\n').map((line, i) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={i} className="font-bold text-white mt-2 first:mt-0">{line.replace(/\*\*/g, '')}</p>;
                    }
                    if (line.startsWith('•')) {
                      return <p key={i} className="ml-2 text-gray-300">{line}</p>;
                    }
                    if (line.startsWith('→')) {
                      return <p key={i} className="ml-4 text-amber-400 text-xs">{line}</p>;
                    }
                    return <p key={i} className={line.trim() ? 'text-gray-300' : 'h-2'}>{line}</p>;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="relative">
          <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/10 rounded-xl">
            <input
              type="text"
              placeholder="Ask anything about markets, stocks, or trading..."
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
              readOnly
            />
            <button className="p-2 bg-amber-500 rounded-lg hover:bg-amber-600 transition-colors">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="text-gray-500">Try:</span>
          {['Explain gamma squeeze', 'Best value stocks', 'FOMC impact analysis'].map((suggestion, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-white/[0.02] border border-white/5 rounded text-gray-400 hover:text-white hover:border-amber-500/30 cursor-pointer transition-all"
            >
              {suggestion}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative px-4 py-3 border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-4 text-gray-500">
            <span>Context: <span className="text-amber-300">All 18 engines</span></span>
            <span>Model: <span className="text-white">GPT-4 Turbo</span></span>
          </div>
          <span className="text-gray-500">FCA-compliant responses</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
