import css from "@eslint/css";
import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["./dist/"]),
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.node },
    plugins: { js },
  },
  tseslint.configs.recommended,
  {
    extends: ["json/recommended"],
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    language: "json/json",
    plugins: { json },
  },
  {
    extends: ["json/recommended"],
    files: ["**/*.jsonc"],
    language: "json/jsonc",
    plugins: { json },
  },
  {
    extends: ["markdown/recommended"],
    files: ["**/*.md"],
    language: "markdown/gfm",
    plugins: { markdown },
  },
  {
    extends: ["css/recommended"],
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
  },
  eslintConfigPrettier,
  {
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "natural",
        },
      ],
    },
  },
]);
