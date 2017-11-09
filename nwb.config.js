const tailwindcss = require('tailwindcss')

module.exports = {
  type: 'preact-app',
  webpack: {
    rules: {
      postcss: {
        plugins: [
          tailwindcss('./tailwind.js'),
          require('autoprefixer'),
        ]
      }
    }
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    }
  }
}
