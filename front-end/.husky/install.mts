import husky from "husky";
import { basename, dirname, join } from "path";

if (process.env.NODE_ENV === "production") {
  process.exit(0);
}

const huskyDirectory: string = dirname(import.meta.url);
const huskyDirectoryFromProjectRoot: string = join(
  basename(dirname(huskyDirectory)),
  basename(huskyDirectory),
);

console.log(husky(huskyDirectoryFromProjectRoot));
