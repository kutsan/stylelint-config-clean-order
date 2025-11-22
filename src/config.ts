import { appearance } from './groups/appearance.ts'
import { boxModel } from './groups/box-model.ts'
import { interaction } from './groups/interaction.ts'
import { layout } from './groups/layout.ts'
import { positioning } from './groups/positioning.ts'
import { svgPresentation } from './groups/svg-presentation.ts'
import { transition } from './groups/transition.ts'
import { typography } from './groups/typography.ts'

export const propertyGroups = [
  ['composes'],
  ['all'],
  interaction,
  positioning,
  layout,
  boxModel,
  typography,
  appearance,
  svgPresentation,
  transition,
]

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'threshold',
  properties,
}))

const EMPTY_LINE_MINIMUM_PROPERTY_THRESHOLD = 5

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- Let return type be inferred.
export function getConfig({ severity }: { severity: 'error' | 'warning' }) {
  return {
    plugins: ['stylelint-order'],
    rules: {
      'declaration-empty-line-before': [
        'always',
        {
          except: ['first-nested'],
          ignore: [
            'after-declaration',
            'after-comment',
            'inside-single-line-block',
          ],
          severity,
        },
      ],
      'at-rule-empty-line-before': [
        'always',
        {
          ignore: [
            'first-nested',
            'blockless-after-same-name-blockless',
            'after-comment',
          ],
          severity,
        },
      ],
      'order/order': [
        [
          { type: 'at-rule', name: 'import' },
          { type: 'at-rule', name: 'forward' },
          { type: 'at-rule', name: 'use' },
          'dollar-variables',
          'at-variables',
          'custom-properties',
          { type: 'at-rule', name: 'custom-media' },
          { type: 'at-rule', name: 'function' },
          { type: 'at-rule', name: 'mixin' },
          { type: 'at-rule', name: 'extend' },
          'declarations',
          {
            type: 'rule',
            selector: /^&::[\w-]+/,
            hasBlock: true,
          },
          'rules',
          { type: 'at-rule', name: 'media', hasBlock: true },
        ],
        {
          severity,
        },
      ],
      'order/properties-order': [
        propertiesOrder,
        {
          severity,
          unspecified: 'bottomAlphabetical',
          emptyLineBeforeUnspecified: 'always',
          emptyLineMinimumPropertyThreshold:
            EMPTY_LINE_MINIMUM_PROPERTY_THRESHOLD,
        },
      ],
    },
  }
}
