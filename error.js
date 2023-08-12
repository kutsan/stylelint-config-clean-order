const { getConfig } = require('./src/config')

const config = getConfig({
  severity: 'error'
})

module.exports = config
