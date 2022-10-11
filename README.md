<img width="100" src="https://github.com/kutsan/stylelint-config-clean-order/raw/master/.github/assets/logo.png" alt="Logo" />

# stylelint-config-clean-order

[![npm](https://img.shields.io/npm/v/stylelint-config-clean-order)](https://www.npmjs.com/package/stylelint-config-clean-order)

Order your styles with [stylelint-order](https://github.com/hudochenkov/stylelint-order).

| Before                                                                                                           | After                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![before](https://user-images.githubusercontent.com/10108377/173256557-88f5098b-dad7-4339-a571-6850ed82828f.png) | ![after](https://user-images.githubusercontent.com/10108377/173256556-e29e892a-2d21-437c-8093-a345d5de920e.png) |

## Usage

Install [`stylelint`](https://github.com/stylelint/stylelint) and this package to your project:

```sh
npm install stylelint stylelint-config-clean-order --save-dev
```

Configure your stylelint configuration file (`.stylelintrc.json`) to extend this package:

> ⚠️ You don't need to install `stylelint-order` nor add `stylelint-order` to `"plugins"` since this package already does that for you.

```json
{
  "extends": ["stylelint-config-clean-order"]
}
```

## Usage with `stylelint-config-prettier`

If you're using one of the Prettier config packages (`stylelint-config-prettier` or `stylelint-config-prettier-scss`) to turn-off rules that might conflict with Prettier, the general advice is to put the prettier config to last, so it can override other configs before it. But, `stylelint-config-clean-order` also overrides two rules that Prettier config packages override (`declaration-empty-line-before` and `at-rule-empty-line-before`) to improve the final formatted result. `stylelint-config-clean-order` doesn't override rules other than these two.

If you want these rules to put into effect, add `stylelint-config-clean-order` just after `stylelint-config-prettier` packages, so it can take-over Prettier overrides.

```json
{
  "extends": ["stylelint-config-prettier", "stylelint-config-clean-order"]
}
```

## About orders

I try to hand-pick style orders in the most logical way to improve process of CSS refactoring; for example `font-size` before `line-height`, `display` before `align-items`. If you think order of a rule doesn't make sense, please open an issue so we can discuss. Thanks!

## License

MIT
