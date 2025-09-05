'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeDebug() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg z-50">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Theme Debug</h3>
      <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
        Current theme: <span className="font-mono">{theme}</span>
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
        HTML class: <span className="font-mono">{typeof document !== 'undefined' ? document.documentElement.className : 'N/A'}</span>
      </p>
      <button
        onClick={toggleTheme}
        className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  );
}
