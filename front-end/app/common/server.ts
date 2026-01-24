const BACK_END_HOST_ADDRESS =
  process.env.BACK_END_HOST_ADDRESS ??
  import.meta.env.VITE_BACK_END_HOST_ADDRESS;
const BACK_END_PORT =
  process.env.BACK_END_PORT ?? import.meta.env.VITE_BACK_END_PORT;
const BACK_END_API_PREFIX =
  process.env.BACK_END_API_PREFIX ?? import.meta.env.VITE_BACK_END_API_PREFIX;

export const SERVER_URL = `${BACK_END_HOST_ADDRESS}:${BACK_END_PORT}`;
export const API_URL = `${SERVER_URL}/${BACK_END_API_PREFIX}`;
