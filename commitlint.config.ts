const isCi = process.env['CI'] === 'true'

export default {
  extends: ['@commitlint/config-conventional'],
  defaultIgnores: !isCi,
}
