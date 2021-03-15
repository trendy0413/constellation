module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:jest-dom/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort", "typescript-sort-keys"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    APP_VERSION: true,
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": [0],
    "prefer-const": "error",
    "sort-keys": [
      "error",
      "asc",
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "new-cap": 0,
    "no-alert": 2,
    "no-case-declarations": 0,
    "no-console": 2,
    "no-underscore-dangle": 0,
    camelcase: 0,
    "generator-star-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "jest/no-disabled-tests": 1,
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    "jest/prefer-to-have-length": 0,
    "jest/valid-expect": 2,
    "new-cap": 0,
    "no-alert": 2,
    "no-case-declarations": 0,
    "no-console": 2,
    "no-underscore-dangle": 0,
    "react/display-name": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": 2,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": 0,
    "react/no-set-state": 0,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 2,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "require-yield": 2,
    "space-before-function-paren": 2,
    "typescript-sort-keys/interface": 2,
    "typescript-sort-keys/string-enum": 2,
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/switch-exhaustiveness-check": 2,
  },
};
