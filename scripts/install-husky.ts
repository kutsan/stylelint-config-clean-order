if (process.env['NODE_ENV'] === 'production' || process.env['CI'] === 'true') {
  process.stdout.write('Skipping Husky installation.\n')
  process.exit(0)
}

const husky = (await import('husky')).default
process.stdout.write(husky() + '\n')

export {}
