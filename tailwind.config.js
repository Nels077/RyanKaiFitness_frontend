import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      'custom': '#6566e2',
      'creamy_yellow': 'rgb(255, 252, 203)',
      'input_bg' : '#56594e'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        'min' : '560px',
        'mid': '800px',
        'lg': '1000px',
        'huge': '1500px',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'slow-spin': 'spinSlow 10s linear infinite',
      },
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}
