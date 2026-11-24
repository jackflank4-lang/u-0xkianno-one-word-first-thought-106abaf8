import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The first word that came to mind: serendipity — a happy accident,
// surprising, vivid, and witty in its sound; it even describes this
// game itself, a word that found its way here by chance.
const WORD = "serendipity";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");

// Re-read and verify: the file must hold exactly the word, 1-24 chars, one line.
const back = readFileSync(outPath, "utf8");
if (back !== WORD) throw new Error(`entry mismatch: ${JSON.stringify(back)}`);
if (back.length < 1 || back.length > 24) throw new Error(`entry length ${back.length} outside 1-24`);
if (back.includes("\n")) throw new Error("entry must be a single word on one line");
