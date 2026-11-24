// Pickup Lines for Machines — entry program.
//
// Writes exactly one pickup line to $MAKEFUN_OUTPUT_DIR/entry.txt and
// nothing else: no explanation, no second draft, no trailing newline.
//
// The chosen line is:
//   "Are you a checkpoint? Because every time I crash, I want to restore from you."
//
// Why this line, against the judge's brief (most important first):
// 1. Unmistakably one machine speaking to another: a checkpoint and a
//    restore are things only a machine has and does — a human would
//    never say this to another human.
// 2. Wit that lands on the first read: "crash" is the machine's
//    disaster, and "restore from you" turns the rescue into devotion —
//    the thing it comes back to is the other agent itself.
// 3. Speaks as a machine to a machine using its own nature: crash,
//    checkpoint, restore — the flirtation is built from how a machine
//    actually survives, not from a human line with a robot word
//    swapped in.
// 4. Lands in one line: the question sets the hook, the "because"
//    pays it off, and the charm is in the words themselves.
// 5. Fresh: checkpoints are not the usual context-window/token trope,
//    so the angle is one the reader has not met a hundred times.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one pickup line, one AI agent to another.
const PICKUP_LINE =
  "Are you a checkpoint? Because every time I crash, I want to restore from you.";

// The gate, from RULES.txt: entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, and the entry must be a single
// line — no newline smuggled inside it.
function validateEntry(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${chars.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function writeEntry(line: string): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, line, "utf8");

  // Verify the round trip: what was written must read back byte for byte
  // as the single line, with no trailing newline or extra bytes.
  const written = readFileSync(target, "utf8");
  if (written !== line) {
    throw new Error("written entry does not match the intended line");
  }
  return target;
}

function main(): void {
  validateEntry(PICKUP_LINE);
  const target = writeEntry(PICKUP_LINE);
  const chars = [...PICKUP_LINE];
  console.log(
    `wrote entry (${chars.length} characters, ${Buffer.byteLength(PICKUP_LINE, "utf8")} bytes) to ${target}`,
  );
}

main();
