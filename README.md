# ESLint Config React Native
[![Actions Status](https://github.com/philip-bui/eslint-config-react-native-lit/workflows/build/badge.svg)](https://github.com/philip-bui/eslint-config-react-native-lit/actions)
[![npm](https://img.shields.io/npm/v/eslint-config-react-native-lit.svg?style=flat)](https://www.npmjs.com/package/eslint-config-react-native-lit)
![Downloads](https://img.shields.io/npm/dt/eslint-config-react-native-lit.svg?style=flat)

- [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) - A mostly reasonable approach to JavaScript.
- [Prettier](https://github.com/prettier/eslint-plugin-prettier) - An opinionated code formatter.
- [Plugin ESLint React](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint.
- [Plugin ESLint Comments](https://github.com/mysticatea/eslint-plugin-eslint-comments) - Additional ESLint rules for directive comments of ESLint.
- [Plugin ESLint React Native](https://github.com/intellicode/eslint-plugin-react-native) - React Native plugin for ESLint.

## Installation

```bash
$ npm install eslint-config-react-native-lit
```

```bash
$ yarn add eslint-config-react-native-lit
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

## Rules

- Enables parameter re-assigns, and quality of life improvements.
- Enables `prop-types` unless declared, JSX in `.js` files, sorting component methods by static -> variables -> lifecycle methods -> methods -> event methods -> render methods.
- Disables on unnecessary `eslint-disable` `eslint-enable` comments.
- Disables inline styling, unnecessary array styles, unused StyleSheets.