const { positioning } = require('./groups/positioning')
const { layout } = require('./groups/layout')
const { boxModel } = require('./groups/box-model')
const { apperance } = require('./groups/apperance')
const { typography } = require('./groups/typography')
const { interaction } = require('./groups/interaction')
const { transition } = require('./groups/transition')
const { svgPresentation } = require('./groups/svg-presentation')

const propertyGroups = [
  ['all'],
  interaction,
  positioning,
  layout,
  boxModel,
  typography,
  apperance,
  svgPresentation,
  transition
]

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'always',
  properties
}))

const config = {
  plugins: ['stylelint-order'],
  rules: {
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: [
          'after-declaration',
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'at-rule-empty-line-before': 'always',
    'order/order': [
      { type: 'at-rule', name: 'import' },
      { type: 'at-rule', name: 'extend' },
      { type: 'at-rule', name: 'apply' },
      { type: 'at-rule', name: 'include' },
      { type: 'at-rule', name: 'mixin' },
      { type: 'at-rule', name: 'add-mixin' },
      'dollar-variables',
      'at-variables',
      'custom-properties',
      'declarations',
      {
        type: 'rule',
        selector: /^&::[\w-]+/,
        hasBlock: true
      },
      'rules',
      {
        type: 'rule',
        selector: /^&:[\w-]+/,
        hasBlock: true
      },
      {
        type: 'rule',
        selector: /^&/,
        hasBlock: true
      },
      { type: 'at-rule', name: 'media', hasBlock: true }
    ],
    'order/properties-order': [
      propertiesOrder,
      {
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'always'
      }
    ]
  }
}

module.exports = config
