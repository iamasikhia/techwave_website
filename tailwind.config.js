module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gradient1: '#fffffe',
        gradient2: '#fff8e7',
        gradient3: '#ffeeed',
        test: '#db1b11',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #5d5d1aff, #4c3e81ff, #db1b11ff)',
      },
    },
  },
  plugins: [],
}
