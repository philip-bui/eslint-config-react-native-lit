module.exports = {
  env: {
    es6: true,
    jest: true,
    "react-native/react-native": true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  plugins: ["eslint-comments", "react-native", "jest"],
  rules: {
    radix: ["error", "as-needed"],
    "no-prototype-builtins": "off",
    "no-plusplus": "off",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_"
      }
    ],
    "no-param-reassign": "off",
    "no-return-assign": "off",
    "react/prop-types": "off",
    "react/sort-comp": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-single-element-style-arrays": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "warn",
    "jest/no-identical-title": "warn",
    "jest/valid-expect": "warn"
  }
};
