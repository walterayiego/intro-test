import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      "react-refresh/only-export-components": "warn",
      "react/prop-types": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-unused-vars": "error",
    },
  },
];