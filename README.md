# ESLint Config React Native
[![Actions Status](https://github.com/philip-bui/eslint-config-react-native-lit/workflows/build/badge.svg)](https://github.com/philip-bui/eslint-config-react-native-lit/actions)
[![npm](https://img.shields.io/npm/v/eslint-config-react-native-lit.svg?style=flat)](https://www.npmjs.com/package/eslint-config-react-native-lit)
![Downloads](https://img.shields.io/npm/dt/eslint-config-react-native-lit.svg?style=flat)

- [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) - A mostly reasonable approach to JavaScript.
- [Prettier](https://github.com/prettier/eslint-plugin-prettier) - An opinionated code formatter.
- [ESLint Plugin React](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint.
- [ESLint Plugin React Native](https://github.com/intellicode/eslint-plugin-react-native) - React Native plugin for ESLint.
- [ESLint Plugin Imports](https://github.com/benmosher/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports.
- [ESLint Plugin Accessibility](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Static AST checker for a11y rules on JSX elements.
- [ESLint Plugin React Redux](https://github.com/DianaSuvorova/eslint-plugin-react-redux) - Enforcing best practices for react-redux.
- [ESLint Plugin React Hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - This ESLint plugin enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).
- [ESLint Plugin Jest](https://github.com/jest-community/eslint-plugin-jest) - ESLint plugin for Jest.
- [ESLint Plugin Comments](https://github.com/mysticatea/eslint-plugin-eslint-comments) - Additional ESLint rules for directive comments of ESLint.

## Installation

```bash
$ npm install eslint-config-react-native-lit --save-dev
```

```bash
$ yarn add -D eslint-config-react-native-lit
```

## Usage

`.eslintrc`
```js
{
    "extends": ["react-native-lit"]
}
```

`package.json`
```json
"eslintConfig": {
    "extends": ["react-native-lit"]
},
```

## Rules Order of Precedence

- Recommended [Prettier React](https://github.com/prettier/eslint-config-prettier/blob/master/react.js) rules.
- Recommended [Airbnb React](https://www.npmjs.com/package/eslint-config-airbnb#eslint-config-airbnb-1) rules which includes [imports](https://www.npmjs.com/package/eslint-plugin-import#rules) and [accessibility](https://www.npmjs.com/package/eslint-plugin-jsx-a11y#supported-rules) and React's [Rule of Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks#valid-and-invalid-examples).
- Recommended [ESLint React Native](https://www.npmjs.com/package/eslint-plugin-react-native#list-of-supported-rules) rules except [sort styles alphabetically](https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/sort-styles.md).
- Recommended [ESLint React Redux](https://www.npmjs.com/package/eslint-plugin-react-redux#usage) rules.
- Recommended [ESLint Jest](https://www.npmjs.com/package/eslint-plugin-jest#recommended) and [style](https://www.npmjs.com/package/eslint-plugin-jest#style) rules.
- Recommended [ESLint comments](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/) rules.
