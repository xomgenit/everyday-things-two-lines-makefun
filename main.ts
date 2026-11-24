import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const firstLine =
  "A toaster is a tiny sun trapped in a metal box: it warms your bread with heat and light, just like the real sun warms your face.";
const secondLine =
  "That works because both change things with heat, but the analogy stops there — a toaster can't grow a garden or rise in the morning.";

const entry = [firstLine, secondLine].join("\n");

if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry length ${entry.length} is outside the 1-400 char gate`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${entry.length} chars, 2 lines)`);
