module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks", "html"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "no-alert": "off",
    "no-array-constructor": "off",
    "no-bitwise": "off",
    "no-caller": "off",
    "no-catch-shadow": "off",
    "no-class-assign": "off",
    "no-cond-assign": "error",
    "no-console": "warn",
    "no-const-assign": "off",
    "no-constant-condition": "error",
    "no-continue": "off",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "off",
    "no-dupe-class-members": "off",
    "no-dupe-keys": "error",
    "no-dupe-args": "error",
    "no-duplicate-case": "error",
    "no-else-return": "off",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-label": "off",
    "no-eq-null": "off",
    "no-eval": "off",
    "no-ex-assign": "error",
    "no-extend-native": "off",
    "no-extra-bind": "off",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "off",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "off",
    "no-func-assign": "error",
    "no-implicit-coercion": "off",
    "no-implied-eval": "off",
    "no-inline-comments": "off",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-regexp": "error",
    "no-invalid-this": "off",
    "no-irregular-whitespace": "error",
    "no-iterator": "off",
    "no-label-var": "off",
    "no-labels": "off",
    "no-lone-blocks": "off",
    "no-lonely-if": "off",
    "no-loop-func": "off",
    "no-mixed-requires": ["off", false],
    "no-mixed-spaces-and-tabs": ["error", false],
    "linebreak-style": ["off", "unix"],
    "no-multi-spaces": "off",
    "no-multi-str": "off",
    "no-multiple-empty-lines": ["off", { max: 2 }],
    "no-native-reassign": "off",
    "no-negated-condition": "off",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "off",
    "no-new": "off",
    "no-new-func": "off",
    "no-new-object": "off",
    "no-new-require": "off",
    "no-new-wrappers": "off",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "off",
    "no-param-reassign": "off",
    "no-path-concat": "off",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-proto": "off",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-modules": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": "off",
    "no-script-url": "off",
    "no-self-compare": "off",
    "no-sequences": "off",
    "no-shadow": "off",
    "no-shadow-restricted-names": "off",
    "no-spaced-func": "off",
    "no-sparse-arrays": "error",
    "no-sync": "off",
    "no-ternary": "off",
    "no-trailing-spaces": "off",
    "no-this-before-super": "off",
    "no-throw-literal": "off",
    "no-undef": "off",
    "no-undef-init": "off",
    "no-undefined": "off",
    "no-unexpected-multiline": "off",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "off",
    "no-unreachable": "error",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn", // or error
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "no-use-before-define": "off",
    "no-useless-call": "off",
    "no-useless-concat": "off",
    "no-void": "off",
    "no-var": "off",
    "no-warning-comments": [
      "off",
      { terms: ["todo", "fixme", "xxx"], location: "start" },
    ],
    "no-with": "off",

    "array-bracket-spacing": ["off", "never"],
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "accessor-pairs": "off",
    "block-scoped-var": "off",
    "block-spacing": "off",
    "brace-style": ["off", "1tbs"],
    "callback-return": "off",
    camelcase: "off",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "off",
    "comma-style": "off",
    complexity: ["off", 11],
    "computed-property-spacing": ["off", "never"],
    "consistent-return": "off",
    "consistent-this": ["off", "that"],
    "constructor-super": "off",
    curly: ["off", "all"],
    "default-case": "off",
    "dot-location": "off",
    "dot-notation": ["off", { allowKeywords: true }],
    "eol-last": "off",
    eqeqeq: "off",
    "func-names": "off",
    "func-style": ["off", "declaration"],
    "generator-star-spacing": "off",
    "global-require": "off",
    "guard-for-in": "off",
    "handle-callback-err": "off",
    "id-length": "off",
    indent: "off",
    "init-declarations": "off",
    "jsx-quotes": ["off", "prefer-double"],
    "key-spacing": ["off", { beforeColon: false, afterColon: true }],
    "lines-around-comment": "off",
    "max-depth": ["off", 4],
    "max-len": ["off", 80, 4],
    "max-nested-callbacks": ["off", 2],
    "max-params": ["off", 3],
    "max-statements": ["off", 10],
    "new-cap": "off",
    "new-parens": "off",
    "newline-after-var": "off",
    "object-curly-spacing": ["off", "never"],
    "object-shorthand": "off",
    "one-var": ["off", "always"],
    "operator-assignment": ["off", "always"],
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-spread": "off",
    "prefer-reflect": "off",
    "prefer-template": "off",
    "quote-props": "off",
    quotes: ["off", "double"],
    radix: "off",
    "id-match": "off",
    "require-jsdoc": "off",
    "require-yield": "off",
    semi: "off",
    "semi-spacing": ["off", { before: false, after: true }],
    "sort-vars": "off",
    "space-after-keywords": ["off", "always"],
    "space-before-keywords": ["off", "always"],
    "space-before-blocks": ["off", "always"],
    "space-before-function-paren": ["off", "always"],
    "space-in-parens": ["off", "never"],
    "space-infix-ops": "off",
    "space-return-throw-case": "off",
    "space-unary-ops": ["off", { words: true, nonwords: false }],
    "spaced-comment": "off",
    strict: "off",
    "use-isnan": "error",
    "valid-jsdoc": "off",
    "valid-typeof": "error",
    "vars-on-top": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    yoda: ["off", "never"],

    // React
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
};