const cssnano = require('cssnano')({
  preset: ['default', {
    discardComments: {
      removeAll: true,
    },
  }]
})
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    '*.html',
    // etc.
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})
module.exports = {
  plugins: [
    require("postcss-import"),
    require('tailwindcss')('assets/tailwind.config.js'),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : [],
    ...process.env.NODE_ENV === 'production' ? [cssnano] : [],
    require('autoprefixer'),
  ],
};
