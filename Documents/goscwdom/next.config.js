const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

module.exports = withImages({
  target: 'serverless',
  future: {
    webpack5: true,
  },
  images: {
    domains: ['goscwdom.codeholic.pl'],
  },
})
