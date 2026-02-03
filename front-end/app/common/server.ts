function getEnvironmentVariable(tag: string): string | undefined {
  return (
    process.env[tag] ?? (import.meta.env[`VITE_${tag}`] as string | undefined)
  );
}

const BACK_END_HOST_ADDRESS: string | undefined = getEnvironmentVariable(
  "BACK_END_HOST_ADDRESS",
);
const BACK_END_PORT: string | undefined =
  getEnvironmentVariable("BACK_END_PORT");
const BACK_END_API_PREFIX: string | undefined = getEnvironmentVariable(
  "BACK_END_API_PREFIX",
);

export const SERVER_URL = `${BACK_END_HOST_ADDRESS}:${BACK_END_PORT}`;
export const API_URL = `${SERVER_URL}/${BACK_END_API_PREFIX}`;
