import { expect, test } from 'vitest'

import { propertyGroups } from '../src/config.ts'

test('Property groups should not contain duplicate properties', () => {
  const allProperties = propertyGroups.flat()

  const duplicates = allProperties.filter(
    (item, index) => allProperties.indexOf(item) !== index,
  )

  expect([...new Set(duplicates)]).toEqual([])
})
