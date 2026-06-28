/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0c11',
        bg2: '#0f1219',
        panel: '#151925',
        panel2: '#1b2030',
        ink: '#f4f5f7',
        muted: '#9aa1ae',
        faint: '#6b7280',
        accent: '#2a4fd6',
        accentSoft: '#4f6ef0',
        line: 'rgba(255,255,255,0.09)',
        lineStrong: 'rgba(255,255,255,0.16)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      borderRadius: { teardrop: '999px 999px 999px 3px' },
      boxShadow: { demo: '0 30px 80px rgba(0,0,0,.5)', shot: '0 24px 60px rgba(0,0,0,.45)' },
      keyframes: {
        pop: { '0%': { transform: 'translate(-50%,-50%) scale(0)' }, '100%': { transform: 'translate(-50%,-50%) scale(1)' } },
      },
      animation: { pop: 'pop .26s cubic-bezier(.16,1,.3,1) forwards' },
    },
  },
  plugins: [],
};
