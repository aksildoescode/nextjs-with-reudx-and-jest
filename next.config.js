const withImages = require('next-images')
module.exports = withImages()
const withFonts = require('next-fonts')
module.exports = withFonts()

module.exports = {
  webpack: function(config) {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  },
}
