module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    // "airbnb",
    // "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  root: true,
  env: {
   browser: true,
    node: true,
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
   
  ],
  rules: {
    "camelcase": [
      "error",
      {
        "properties": "never",
        "ignoreDestructuring": true
      }
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "import/prefer-default-export": "off",
    // "import/no-extraneous-dependencies": [
    //   "error",
    //   {
    //     "devDependencies": [
    //       "**/*.test.js",
    //       "**/*.test.jsx",
    //       "**/*.test.ts",
    //       "**/*.test.tsx",
    //       "**/*.spec.js"
    //     ]
    //   }
    // ],
  },
};
