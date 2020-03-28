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
  plugins: [
    // https://www.npmjs.com/package/eslint-plugin-eslint-comments
    "eslint-comments",
    // https://www.npmjs.com/package/eslint-plugin-react-native
    "react-native",
    // https://www.npmjs.com/package/eslint-plugin-jest
    "jest",
    // https://www.npmjs.com/package/eslint-plugin-react-redux
    "react-redux"
  ],
  extends: [
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
    "plugin:eslint-comments/recommended",
    // https://www.npmjs.com/package/eslint-plugin-jest#recommended
    "plugin:jest/recommended",
    // https://www.npmjs.com/package/eslint-plugin-jest#style
    "plugin:jest/style",
    // https://www.npmjs.com/package/eslint-plugin-react-redux#supported-rules
    "plugin:react-redux/recommended",
    // https://www.npmjs.com/package/eslint-config-airbnb
    "airbnb",
    // https://www.npmjs.com/package/eslint-plugin-prettier#recommended-configuration
    "plugin:prettier/recommended",
    // We override Airbnb with prettier, and add React prettier plugins
    "prettier/react"
  ],
  rules: {
    // Enables parseInt without second parameter of radix.
    radix: ["error", "as-needed"],
    // Enables using prototype methods without Object.prototype.method.
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
    // Enables returning of assignment for this.ref = ref.
    "no-return-assign": "off",

    // Import Plugin - eslint-plugin-import
    // Recommends using default export for single-export files.
    "import/prefer-default-export": "warn",

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
    // Enforces Static Properties as static public field.
    "react/static-property-placement": ["error", "static public field"],
    // Enforces State as static field.
    "react/state-in-constructor": ["error", "never"],
    // Enables JSX Spreading.
    "react/jsx-props-no-spreading": "off",
    // React-Native Plugin - eslint-plugin-react-native
    // Enforces no unused StyleSheets.
    "react-native/no-unused-styles": "error",
    // Enforces no inline styles.
    "react-native/no-inline-styles": "error",
    // Enforces no single-element style arrays.
    "react-native/no-single-element-style-arrays": "error",

    // Jest Plugin - eslint-plugin-jest
    // Enforces a top-level describe block.
    "jest/require-top-level-describe": "warn",
    // Enforces valid describe() callbacks.
    "jest/valid-describe": "error",
    // Enforces valid titles for jest blocks.
    "jest/valid-title": "error",

    // React-Redux Plugin - eslint-plugin-react-redux
    // Enables connected component and component in single file.
    "react-redux/prefer-separate-component-file": "off"
  }
};
