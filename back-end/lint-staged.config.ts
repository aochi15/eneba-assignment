import { type Configuration } from "lint-staged";

const config: Configuration = {
  "*.{js,jsx,ts,tsx}": ["eslint", "prettier --check"],
  "*.{json,yml,yaml,md}": ["eslint", "prettier --check"],
};

export default config;
