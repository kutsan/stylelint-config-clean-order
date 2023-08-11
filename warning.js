const { getConfig } = require('./src/config')

const config = getConfig({
  severity: 'warning'
})

module.exports = config
