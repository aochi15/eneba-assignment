import { type Configuration } from "lint-staged";

const config: Configuration = {
  "*.{ts,tsx,mts,json,md,css}": ["npm run lint:check", "npm run format:check"],
};

export default config;
