module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:jest-dom/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:json/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort", "sort-destructure-keys"],
  parserOptions: {
    ecmaVersion: "es2021",
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
    "jest/globals": true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "react/display-name": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "import/extensions": "off",
    "import/no-cycle": "off",
    "no-case-declarations": "off",
    "no-underscore-dangle": "off",
    "new-cap": "off",
    camelcase: "off",
    "no-use-before-define": "off",
    "react/prop-types": ["off"],
    "import/export": "off",
    "import/no-unresolved": "error",
    "prefer-const": "error",
    "sort-keys": [
      "error",
      "asc",
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
    "sort-destructure-keys/sort-destructure-keys": 2,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-alert": "error",
    "no-console": "error",
    "require-yield": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/no-use-before-define": ["error"],
  },
};
