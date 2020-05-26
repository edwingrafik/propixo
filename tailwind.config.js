module.exports = {
  purge: [],
  theme: {
    extend: {
      fontSize: {
        label: ['0.875', '1rem'],
        small: ['0.75rem', '1rem'],
        base: ['1rem', '1.5rem'], // font-size: 16px, line-height: 24px
        button: ['1rem', '1rem'],
        h4: ['1.375rem', '1.75rem'],
        h3: ['1.5rem', '2.125rem'],
        h2: ['2.5rem', '2.75rem'],
        h1: ['4rem', '3.875rem'],
      },
      spacing: {
        '8': '0.5rem', // 8px
        '16': '1rem', // 16px
        '24': '1.5rem', // 24px
        '40': '2.5rem', // 40px
        '64': '4rem', // 64px
        '104': '6.5rem', // 104px
        '168': '10.5rem', // 168px
        '272': '17rem', // 272px
      },
    },
    screens: {
      'sm': '768px',    // @media (min-width: 768px)
      'md': '1024px',   // @media (min-width: 1024px)
      'lg': '1440px',   // @media (min-width: 1440px)
      'xl': '1920px',   // @media (min-width: 1920px)
    },
    container: {
      center: true,
      padding: {
        default: '1.5rem',  // 24px
        sm: '2.5rem',       // 40px
        md: '4rem',         // 64px
        lg: '10.5rem',      // 168px
        xl: '17rem',        //272px
      },
    },
  },
  variants: {},
  plugins: [],
};
