import { type Configuration } from "lint-staged";

const config: Configuration = {
  "*.{ts,mts,json,md}": ["npm run lint:check", "npm run format:check"],
};

export default config;
