export default {
  '*.{js,ts}': ['eslint --max-warnings=0', 'prettier --write'],
  '*.ts': () => 'tsc',
  '*.{json,md,yaml}': ['prettier --write'],
}
