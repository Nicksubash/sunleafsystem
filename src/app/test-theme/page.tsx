'use client';

import { useTheme } from '@/components/ThemeProvider';

export default function TestThemePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Theme Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Light/Dark Card</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This card should change colors when you toggle the theme.
            </p>
            <button
              onClick={toggleTheme}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Toggle Theme
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Current Theme</h2>
            <p className="text-lg mb-2">Theme: <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{theme}</span></p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              HTML classes: <span className="font-mono">{typeof document !== 'undefined' ? document.documentElement.className : 'Loading...'}</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Color Test</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-red-500 text-white p-4 rounded">Red</div>
            <div className="bg-green-500 text-white p-4 rounded">Green</div>
            <div className="bg-blue-500 text-white p-4 rounded">Blue</div>
            <div className="bg-yellow-500 text-black p-4 rounded">Yellow</div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded">Gray Light/Dark</div>
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-4 rounded">Gray Light/Dark</div>
            <div className="bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white p-4 rounded">Gray Light/Dark</div>
            <div className="bg-gray-400 dark:bg-gray-500 text-gray-900 dark:text-white p-4 rounded">Gray Light/Dark</div>
          </div>
        </div>
      </div>
    </div>
  );
}
