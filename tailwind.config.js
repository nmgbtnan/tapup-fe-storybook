/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
        '2xl': '4rem',
      },
      screens: {
        DEFAULT: '1200px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        custom: {
          green: '#22C55E',
          black: '#1e1e1e',
          gray: '#ededed',
          textGray: '#454545',
          badge: {
            greenbg: '#bcf6cc',
            redbg: '#fecdcd',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      width: {
        showcase: 'calc(100% - 50px)',
      },
      fontFamily: {
        'racing-sans-one': [`var(--font-racing-sans-one)`],
        'roboto-condensed': ['var(--font-roboto-condensed)'],
        'league-spartan': ['var(--font-league-spartan)'],
        'roboto-mono': ['var(--font-roboto-mono)'],
        montserrat: ['var(--font-montserrat)'],
        'open-sans': ['var(--font-open-sans)'],
        raleway: ['var(--font-raleway)'],
        bebas: ['var(--font-bebas-neue)'],
        lato: ['var(--font-lato)'],
        kaushan: ['var(--font-kaushan-script)'],
        'comic-neue': ['var(--font-comic-neue)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
