module.exports = {
  plugins: ["babel-plugin-styled-components"],
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === 'development',
      },
    ]
  ]
}
