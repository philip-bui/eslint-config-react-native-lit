module.exports = {
  env: {
    es6: true,
    jest: true,
    // Whitelist all browser-like globals.
    "react-native/react-native": true
  },
  parser: "babel-eslint",
  parserOptions: {
    // Enables ecmaFeatures modules
    sourceType: "module",
    // Enables ecmaFeatures experimentalObjectRestSpread
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb
    "airbnb",
    // https://www.npmjs.com/package/eslint-plugin-prettier
    "plugin:prettier/recommended",
    // We override Airbnb with prettier, and add React prettier plugins
    "prettier/react"
  ],
  plugins: [
    // https://www.npmjs.com/package/eslint-plugin-eslint-comments
    "eslint-comments",
    // https://www.npmjs.com/package/eslint-plugin-react-native
    "react-native",
    // https://www.npmjs.com/package/eslint-plugin-jest
    "jest"
  ],
  rules: {
    // Enables parseInt without second parameter of radix.
    radix: ["error", "as-needed"],
    // Enables using object methods without Object.prototype.method.
    "no-prototype-builtins": "off",
    // Enables ++.
    "no-plusplus": "off",
    // Ignores unused vars named _.
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_"
      }
    ],
    // Enables reassignment of function parameters.
    "no-param-reassign": "off",

    // React Plugin - eslint-plugin-react
    // Enforces PropType validation only if declared PropTypes block.
    "react/prop-types": ["error", { skipUndeclared: true }],
    // Sorts Static Methods, Static Variables, Instance Variables, Lifecycle, Everything Else, Event Methods, Rendering Methods.
    "react/sort-comp": [
      "warn",
      {
        order: [
          "static-methods",
          "static-variables",
          "instance-variables",
          "lifecycle",
          "everything-else",
          "/^on.+$/",
          "rendering"
        ],
        groups: {
          rendering: ["/^render.+$/", "render"]
        }
      }
    ],
    // Enables PropTypes of any, object, array.
    "react/forbid-prop-types": "off",
    // Enforces JSX only in .js and .jsx files.
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ],

    // ESLint Comments Plugin - eslint-plugin-eslint-comments
    // Disables eslint-enable comments for multiple eslint-disable comments.
    "eslint-comments/no-aggregating-enable": "error",
    // Disables eslint-disable comments without rule names.
    "eslint-comments/no-unlimited-disable": "error",
    // Disables eslint-disable that don't cover any errors.
    "eslint-comments/no-unused-disable": "error",
    // Disables eslint-enable that don't enable anything or enable rules that weren't disabled.
    "eslint-comments/no-unused-enable": "error",

    // React-Native Plugin - eslint-plugin-react-native
    // Enforces Static Properties as static public field.
    "react/static-property-placement": ["error"],
    // Enforces State as static field.
    "react/state-in-constructor": ["error", "never"],
    // Enables JSX Spreading.
    "react/jsx-props-no-spreading": "off",
    // Enforces no unused StyleSheets.
    "react-native/no-unused-styles": "error",
    // Enforces no inline styles.
    "react-native/no-inline-styles": "error",
    // Enforces no single-element style arrays.
    "react-native/no-single-element-style-arrays": "error",

    // Jest Plugin - eslint-plugin-jest
    // Disables commiting disabled tests.
    "jest/no-disabled-tests": "error",
    // Disables commiting focused tests (run only one test).
    "jest/no-focused-tests": "error",
    // Disables commiting duplicate named test-suites or tests.
    "jest/no-identical-title": "error",
    // Disables commiting empty expect assertions.
    "jest/valid-expect": "error"
  }
};
