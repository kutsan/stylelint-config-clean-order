export default {
  branches: ['master'],
  plugins: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          // eslint-disable-next-line no-template-curly-in-string -- Template string are required by `semantic-release`.
          '${nextRelease.version}\n\n\nskip-checks: true',
      },
    ],
  ],
}
