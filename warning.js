const { getConfig, propertyGroups } = require('./src/config')

const config = getConfig({
  severity: 'warning'
})

module.exports = config
module.exports.propertyGroups = propertyGroups
