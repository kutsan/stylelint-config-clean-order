<img width="100" src=".github/assets/logo.png" alt="Logo" />

# stylelint-config-clean-order

[![npm](https://img.shields.io/npm/v/stylelint-config-clean-order)](https://www.npmjs.com/package/stylelint-config-clean-order)
[![ci](https://github.com/kutsan/stylelint-config-clean-order/actions/workflows/ci.yaml/badge.svg)](https://github.com/kutsan/stylelint-config-clean-order/actions/workflows/ci.yaml)

Order your styles with [stylelint-order](https://github.com/hudochenkov/stylelint-order).

| Before                                                                                                           | After                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![before](https://user-images.githubusercontent.com/10108377/173256557-88f5098b-dad7-4339-a571-6850ed82828f.png) | ![after](https://user-images.githubusercontent.com/10108377/173256556-e29e892a-2d21-437c-8093-a345d5de920e.png) |

## Usage

Install [`stylelint`](https://github.com/stylelint/stylelint), this config package and its `stylelint-order` peer dependency to your project:

```sh
npm add --save-dev stylelint stylelint-order stylelint-config-clean-order
```

Configure your stylelint configuration file (`stylelint.config.js`) to extend this package:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-clean-order'],
}
```

That's it! Now your styles will be ordered! You can use `stylelint --fix` command to automatically fix order issues.

## Severity Options

Default severity level is `warning` but you can use error variant to change severity level to `error`.

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-clean-order/error'],
}
```

## Customization

You can import raw property groups to add or override rule options. Please refer to [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin documentation.

For example, you can override `'properties-order'` rule to not have empty lines between groups:

```javascript
import { propertyGroups } from 'stylelint-config-clean-order'

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never', // Don't add empty lines between order groups.
  properties,
}))

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-clean-order'],
  rules: {
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
}
```

## Extra empty lines for formatting

In addition to `stylelint-order` plugin, this package also overrides two rules (`declaration-empty-line-before` and `at-rule-empty-line-before`) to improve the final formatted result by adding extra empty lines between declarations. `stylelint-config-clean-order` does not override a rule other than these two.

If you want these rules to put into effect, make sure config packages after `stylelint-config-clean-order` do not override them.

## About orders

I try to hand-pick style orders in the most logical way to improve process of CSS refactoring; for example `font-size` before `line-height`, `display` before `align-items`. If you think order of a rule doesn't make sense, please open an issue so we can discuss. Thanks!

## License

MIT
