module.exports = {
  root: true,
  parser: "babel-eslint",

  extends: ["airbnb-base", "plugin:flowtype/recommended", "prettier"],

  plugins: ["flowtype", "prettier"],

  rules: {
    semi: ["warn", "never"],
    "no-console": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "_" }],
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "global-require": "off",
    "no-unused-expressions": "off",
    "flowtype/no-types-missing-file-annotation": "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: false,
        singleQuote: true
      }
    ]
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  },

  env: {
    node: true,
    jest: true
  }
};
