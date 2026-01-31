import { type Configuration } from "lint-staged";

const config: Configuration = {
  "*.{js,jsx,ts,tsx,json,yml,yaml,md}": [
    "npm run lint:check",
    "npm run format:check",
  ],
};

export default config;
