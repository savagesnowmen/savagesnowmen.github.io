module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  mode: 'jit',
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      inset: {
        '1': '1rem',
        '3rem': '3rem',
        '43vw': '43vw',
        '77%': '77%',
        '13vw': '13vw',
        '20vw': '20vw'
      },
      width: {
        '8rem': '8rem',
        '12rem': '12rem',
        '14rem': '14rem',
        '16rem': '16rem',
        '20rem': '20rem',
        '24rem': '24rem',
        '28rem': '28rem',
        '32rem': '32rem',
        'unset': 'unset',
        '50px': '50px',
        'maxContent': 'max-content'
      },
      height: {
        '8rem': '8rem',
        '12rem': '12rem',
        '14rem': '14rem',
        '16rem': '16rem',
        '20rem': '20rem',
        '24rem': '24rem',
        '32rem': '32rem',
        '56vw': '56vw'
      },
      minHeight: {
        '10rem': '10rem',
        '565px': '565px'
      },
      minWidth: {
        '7em': '7em',
        '1000px': '1000px'
      },
      translateX: {
        '-3rem': '-3rem'
      },
      translate: {
        '-3rem': '-3rem'
      },
      margin: {
        '6rem': '6rem',
        'auto': 'auto'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
