import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,

        // Mocha globals (testes)
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      }
    },

    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": "error",
      "no-var": "error",
      "prefer-const": "warn"
    }
  },

  {
    ignores: [
      "node_modules/",
      "coverage/",
      "mochawesome-report/",
      "reports/"
    ]
  }
];