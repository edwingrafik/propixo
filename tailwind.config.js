const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'var(--primary-l)',
          default: 'var(--primary)',
          darker: 'var(--primary-d)',
        },
        secondary: {
          lighter: 'var(--secondary-l)',
          default: 'var(--secondary)',
          darker: 'var(--secondary-d)',
        },
        bg: {
          lighter: 'var(--bg-0)',
          default: 'var(--bg-1)',
          darker: 'var(--bg-2)',
        },
        text: {
          lighter: 'var(--text-l)',
          default: 'var(--text)',
        },
      },
      letterSpacing: {
        tighter: '-.02em',
        tight: '-.01em',
        normal: '0em',
        wide: '.02em',
        wider: '.03em',
        widest: '.04em',
      },
      fontSize: {
        small: '0.875rem',
        base: '1.125rem',
        h3: 'var(--space-26)',
        h2: 'var(--space-42)',
        h1: 'var(--space-68)',
      },
      lineHeight: {
        small: '1.25rem',
        base: 'var(--space-26)',
        h3: 'var(--space-42)',
        h2: '3.125rem',
        h1: '4.75rem',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '10': 'var(--space-10)',
        '16': 'var(--space-16)',
        '26': 'var(--space-26)',
        '42': 'var(--space-42)',
        '68': 'var(--space-68)',
        '110': 'var(--space-110)',
        '178': 'var(--space-178)',
        '288': 'var(--space-288)',
      },
    },
    screens: {
      sm: '768px', // @media (min-width: 768px)
      md: '1024px', // @media (min-width: 1024px)
      lg: '1440px', // @media (min-width: 1440px)
      xl: '1920px', // @media (min-width: 1920px)
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {},
  plugins: [],
};
