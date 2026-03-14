/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:  '#0a0a14',
          card:  '#12121f',
          panel: '#1a1a2e',
          purple: '#7c3aed',
          'purple-light': '#a78bfa',
          cyan:  '#22d3ee',
          'cyan-light': '#67e8f9',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'sans-serif'],
        mono: ['Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          from: { textShadow: '0 0 8px #7c3aed, 0 0 16px #7c3aed' },
          to:   { textShadow: '0 0 16px #22d3ee, 0 0 32px #22d3ee' },
        },
      },
    },
  },
  plugins: [],
}
