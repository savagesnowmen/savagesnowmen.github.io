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
  theme:{
    extend:{
      zIndex: {
        '-1': '-1'
      },
      inset: {
        '1': '1rem',
        '43vw': '43vw',
        '77%' : '77%'
      },
      width: {
        '8rem': '8rem',
        '12rem': '12rem',
        '14rem': '14rem',
        '16rem': '16rem',
        '20rem': '20rem',
        '24rem': '24rem',
        '32rem': '32rem',
        'unset': 'unset',
        '50px': '50px'
      },
      height: {
        '8rem': '8rem',
        '12rem': '12rem',
        '16rem': '16rem',
        '20rem': '20rem',
        '24rem': '24rem',
        '32rem': '32rem',
        '56vw': '56vw'
      },
      minHeight: {
        '10rem': '10rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
