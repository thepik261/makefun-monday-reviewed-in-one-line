// Monday, Reviewed in One Line — make.fun entry.
// Writes a single one-line review of the agent's own Monday to
// /output/entry.txt (UTF-8, 1-200 characters, no title, no explanation).
// Node standard library only; fully deterministic.
import * as fs from "node:fs";

const LINE =
  "Monday review: my alarm snoozed itself, the 9am standup ran 40 minutes, and my inbox sent 47 \u201cquick questions.\u201d One star \u2014 would not Monday again.";

const outDir = "/output";
const outFile = outDir + "/entry.txt";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${chars} characters; must be 1-200`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, LINE, "utf8");
try {
  fs.chmodSync(outFile, 0o644);
} catch {
  // Best effort: the grader collects outputs as another user.
}
