/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-500', 'bg-purple-500',
    'text-blue-400', 'text-purple-400', 'text-slate-400',
    'bg-blue-500/10', 'bg-purple-500/10', 'bg-white/[0.05]',
    'border-blue-500/20', 'border-purple-500/20', 'border-white/10',
    'hover:border-blue-500/30', 'hover:border-purple-500/30',
    'from-blue-500/10', 'from-purple-500/10', 'from-blue-500/5', 'from-purple-500/5',
    'bg-blue-400/50', 'bg-purple-400/50',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
