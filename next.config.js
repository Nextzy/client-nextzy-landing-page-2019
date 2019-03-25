const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  target: 'serverless',
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
