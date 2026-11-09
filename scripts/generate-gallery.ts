import { readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const directory = join(process.cwd(), "public/images/gallery");
const files = (await readdir(directory, { withFileTypes: true }))
  .filter(entry => entry.isFile() && /\.(jpe?g|png|webp|avif|gif)$/i.test(entry.name))
  .map(entry => entry.name)
  .sort((a, b) => a.localeCompare(b, "en", { numeric: true, sensitivity: "base" }));
await writeFile(join(process.cwd(), "lib/gallery-images.json"), JSON.stringify(files, null, 2) + "\n");
console.log(`Gallery: ${files.length} images`);
