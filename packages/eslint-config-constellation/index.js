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
    "import/no-unresolved": "error",
    "react/prop-types": ["off"],
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
    "new-cap": "off",
    "no-alert": "error",
    "no-case-declarations": "off",
    "no-console": "error",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "require-yield": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
  },
};
