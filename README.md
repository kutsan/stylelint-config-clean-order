<img width="100" src=".github/assets/logo.png" alt="Logo" />

# stylelint-config-clean-order

[![npm](https://img.shields.io/npm/v/stylelint-config-clean-order)](https://www.npmjs.com/package/stylelint-config-clean-order)
[![ci](https://github.com/kutsan/stylelint-config-clean-order/actions/workflows/ci.yaml/badge.svg)](https://github.com/kutsan/stylelint-config-clean-order/actions/workflows/ci.yaml)

Sort CSS properties into logical groups with [stylelint-order](https://github.com/hudochenkov/stylelint-order).

```css
.card {
  /* Interaction */
  cursor: pointer;

  /* Positioning */
  position: relative;
  z-index: 1;

  /* Layout */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  /* Box Model */
  width: 100%;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);

  /* Typography */
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text);

  /* Appearance */
  opacity: 1;
  background-color: var(--color-bg);
  box-shadow: var(--shadow-md);

  /* Transition */
  transition: transform var(--duration-fast);
}
```

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

Run `stylelint --fix` to automatically sort properties.

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

## Property Order

Properties are organized into logical groups:

1. **Interaction**: `cursor`, `pointer-events`, `user-select`, etc.
2. **Positioning**: `position`, `z-index`, `top`, `right`, `bottom`, `left`, `transform`, etc.
3. **Layout**: `display`, `flex`, `grid`, `gap`, `align-items`, `justify-content`, etc.
4. **Box Model**: `width`, `height`, `margin`, `padding`, `border`, etc.
5. **Typography**: `font-size`, `line-height`, `color`, `text-align`, etc.
6. **Appearance**: `background`, `opacity`, `box-shadow`, `filter`, etc.
7. **Transition**: `transition`, `animation`, etc.

Within each group, properties are ordered logically (e.g., `font-size` before `line-height`, `display` before `align-items`). If you think a property order doesn't make sense, please open an issue.

## License

MIT
