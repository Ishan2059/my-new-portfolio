import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        'accent-dim': 'var(--color-accent-dim)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '128': '128px',
      },
      boxShadow: {
        'card': '0 0 0 1px var(--color-border), 0 8px 32px rgba(0,0,0,0.4)',
        'glow-accent': '0 0 24px rgba(202,255,0,0.15)',
      },
    },
    keyframes: {
      spotlight: {
        '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
        '100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' },
      },
    },
    animation: {
      spotlight: 'spotlight 2s ease .75s 1 forwards',
    },
  },
  plugins: [],
}
export default config
