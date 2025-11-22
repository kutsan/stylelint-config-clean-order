import type stylelint from 'stylelint'

export function processLinterResult({
  linterResult,
}: {
  linterResult: stylelint.LinterResult
}): { diagnosticInfo: string | null } {
  const issues = linterResult.results
    .filter(
      (result) =>
        result.errored === true ||
        result.warnings.length > 0 ||
        result.deprecations.length > 0 ||
        result.invalidOptionWarnings.length > 0,
    )
    .flatMap((result) => [
      ...(result.errored === true
        ? ['There are warning(s) with error severity.']
        : []),
      ...result.warnings.map(
        ({ severity, text, line, column, endLine, endColumn }) =>
          `[WARNING/${severity}] (${line}:${column}-${endLine}:${endColumn}) ${text}`,
      ),
      ...result.deprecations.map(
        ({ text, reference }) => `[DEPRECATION] ${text} (${reference})`,
      ),
      ...result.invalidOptionWarnings.map(
        ({ text }) => `[INVALID OPTION WARNING] ${text}`,
      ),
    ])

  if (issues.length > 0) {
    const diagnosticInfo = [
      '',
      'Stylelint failed with issues!',
      ...issues,
      '',
    ].join('\n')

    return {
      diagnosticInfo,
    }
  }

  return {
    diagnosticInfo: null,
  }
}
