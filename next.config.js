require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')
/* const glob = require('glob') */
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  target: 'server',
  webpack: (config) => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env.development'),
        systemvars: true
      })
    ]
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
