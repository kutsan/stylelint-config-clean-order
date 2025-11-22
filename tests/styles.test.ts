import stylelint from 'stylelint'
import { expect, test } from 'vitest'

import errorConfig from '../src/error.ts'
import warningConfig from '../src/index.ts'
import { processLinterResult } from './process-linter-result.ts'

test('Lint styles with warning severity', async () => {
  const linterResult = await stylelint.lint({
    files: ['**/*.css'],
    config: warningConfig,
  })

  const { diagnosticInfo } = processLinterResult({
    linterResult,
  })

  expect(diagnosticInfo).toBeNull()
})

test('Lint styles with error severity', async () => {
  const linterResult = await stylelint.lint({
    files: ['**/*.css'],
    config: errorConfig,
  })

  const { diagnosticInfo } = processLinterResult({
    linterResult,
  })

  expect(diagnosticInfo).toBeNull()
})
