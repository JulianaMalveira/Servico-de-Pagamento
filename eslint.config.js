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

        // Mocha
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      }
    },

    rules: {
      // 🔥 BASE (não quebra pipeline)
      "no-unused-vars": "warn",
      "no-undef": "error",

      // ✔ boas práticas seguras
      "no-var": "error",
      "prefer-const": "warn",
      "eqeqeq": "warn",

      // 🧪 qualidade (seguro, não bloqueia CI)
      "no-empty": "warn",
      "no-console": "off",

      // 🧠 estilo leve (não agressivo)
      "consistent-return": "off",
      "no-shadow": "off"
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