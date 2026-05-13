/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary luxury palette
        obsidian: '#050505',
        charcoal: '#1B1B1B',
        gold: {
          DEFAULT: '#C8A96B',
          light: '#E0C68A',
          dark: '#9B7F4A',
        },
        ivory: '#F5F1E8',

        // Accents
        ruby: '#7A1E2C',
        emerald: '#0F5C4D',

        // Secondary
        navy: '#0F172A',
        silver: '#A8A8A8',
        'soft-gray': '#D1D5DB',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #9B7F4A 0%, #C8A96B 45%, #E0C68A 60%, #C8A96B 80%, #9B7F4A 100%)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        gold: '0 0 30px rgba(200, 169, 107, 0.25)',
        'gold-lg': '0 0 60px rgba(200, 169, 107, 0.35)',
        inset: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
}
