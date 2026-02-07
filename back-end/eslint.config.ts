import json from "@eslint/json";
import markdown from "@eslint/markdown";
import vitest from "@vitest/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["./build/", "./coverage/", "package-lock.json"]),
  {
    files: ["**/*.{ts,mts}"],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.ts", "tests/*.ts", ".husky/install.mts"],
        },
      },
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.test.ts"],
    plugins: { vitest },
    extends: [vitest.configs.recommended],
  },
  eslintConfigPrettier,
  {
    files: ["**/*.{ts,mts}"],
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "natural",
        },
      ],
    },
  },
]);
