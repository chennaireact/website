import { readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const directory = join(process.cwd(), "public/images/gallery");
let entries;
try {
  entries = await readdir(directory, { withFileTypes: true });
} catch (error) {
  if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
  console.log("Local gallery is unavailable; keeping the existing fallback manifest.");
  process.exit(0);
}
const files = entries
  .filter(entry => entry.isFile() && /\.(jpe?g|png|webp|avif|gif)$/i.test(entry.name))
  .map(entry => entry.name)
  .sort((a, b) => a.localeCompare(b, "en", { numeric: true, sensitivity: "base" }));
if (files.length === 0) {
  console.log("Local gallery is empty; keeping the existing fallback manifest.");
  process.exit(0);
}
await writeFile(join(process.cwd(), "lib/gallery-images.json"), JSON.stringify(files, null, 2) + "\n");
console.log(`Gallery: ${files.length} images`);
