const { positioning } = require('./positioning')
const { layout } = require('./layout')
const { boxModel } = require('./box-model')
const { appearance } = require('./appearance')
const { typography } = require('./typography')
const { interaction } = require('./interaction')
const { transition } = require('./transition')
const { svgPresentation } = require('./svg-presentation')

const propertyGroups = [
  ['composes'],
  ['all'],
  interaction,
  positioning,
  layout,
  boxModel,
  typography,
  appearance,
  svgPresentation,
  transition
]

module.exports = propertyGroups;