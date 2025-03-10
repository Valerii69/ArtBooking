/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#598D66',
          200: '#376B44',
          300: '#D4E8D9',
          400: '#E1EDE6',
        },

        yellow: {
          100: '#D9B949',
          200: '#EEDB6D',
          300: '#FAEB97',
        },

        black: '#2C2D35',
        red: '#E0372C',
        grey: '#86928B',
      },
      backgroundImage: {
        // 'custom-image': "url('./public/BgDesk.jpg')",
        // 'body-gradient1': 'linear-gradient(180deg, #FDE3D7 0%, #B4BEC9 75%)',
        // 'body-gradient2': 'linear-gradient(180deg, #B4BEC9 0%, #FDE3D7) 75%)',
      },
      //td - Tablet and Desktop
      fontSize: {
        'large-title-td': [
          '58px',
          {
            lineHeight: '120%',
            letterSpacing: '1.16px',
          },
        ],
        'large-title-mob': [
          '36px',
          {
            lineHeight: '120%',
            letterSpacing: '0.72px',
          },
        ],
        'h1-td': [
          '36px',
          {
            lineHeight: '150%',
            letterSpacing: '0px',
          },
        ],
        'h1-mob': [
          '28px',
          {
            lineHeight: '120%',
            letterSpacing: '0px',
          },
        ],
        h2: [
          '24px',
          {
            lineHeight: '150%',
            letterSpacing: '0px',
          },
        ],
        h3: [
          '20px',
          {
            lineHeight: '150%',
            letterSpacing: '0px',
          },
        ],
        'body-large': [
          '18px',
          {
            lineHeight: '150%',
            letterSpacing: '0px',
          },
        ],
        body1: [
          '16px',
          {
            lineHeight: '150%',
            letterSpacing: '0px',
          },
        ],
        body2: [
          '14px',
          {
            lineHeight: '150%',
            letterSpacing: '0.14px',
          },
        ],
        caption: [
          '12px',
          {
            lineHeight: '150%',
            letterSpacing: '0.12px',
          },
        ],
      },

      screens: {
        mob: '375px',
        tab: '768px',
        lap: '1200px',
        desk: '1440px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const scrollBarUtilities = {
        '.scrollbar-none': {
          scrollbarWidth: 'none',
        },

        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            height: '6px',
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#FFF',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#E1D1CE',
          },
        },
      };

      addUtilities(scrollBarUtilities);
    },
  ],
};
// export const 
// export const 

// export const plugins = [
//   function ({ addUtilities }) {
//     const scrollBarUtilities = {
//       '.scrollbar-none': {
//         scrollbarWidth: 'none',
//       },

//       '.scrollbar-webkit': {
//         '&::-webkit-scrollbar': {
//           height: '6px',
//           width: '6px',
//         },
//         '&::-webkit-scrollbar-track': {
//           backgroundColor: '#FFF',
//         },
//         '&::-webkit-scrollbar-thumb': {
//           backgroundColor: '#E1D1CE',
//         },
//       },
//     };

//     addUtilities(scrollBarUtilities);
//   },
// ];

