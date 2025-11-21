'use client';

import { useTheme } from '@/context/ThemeContext';

interface ScoreCardProps {
  title: string;
  score: number;
  rating?: string;
  description?: string;
  icon?: React.ReactNode;
  showProgress?: boolean;
}

export function ScoreCard({ title, score, rating, description, icon, showProgress = true }: ScoreCardProps) {
  const { theme } = useTheme();

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-blue-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const isDark = theme === 'dark';

  return (
    <div className={`rounded-lg p-6 border transition-all hover:shadow-lg ${
      isDark
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{icon}</div>}
          <div>
            <h3 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {title}
            </h3>
            {rating && (
              <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {rating}
              </p>
            )}
          </div>
        </div>
        <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
          {score}
        </div>
      </div>

      {showProgress && (
        <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${getProgressColor(score)} transition-all duration-500`}
            style={{ width: `${score}%` }}
          />
        </div>
      )}

      {description && (
        <p className={`mt-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
