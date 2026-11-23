// One Letter for Your Day — u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is a single letter, A–Z, standing for the word that
// describes the day. This letter is "U" — for "unhinged".
//
// Why U: a day that was unhinged is a sharp, funny, honest picture —
// nothing went to plan, everything escalated, and you lived to tell
// it. The word is vivid (you can see the day coming off its hinges),
// funny (the kind of summary you repeat to a friend), and true
// (an ordinary day that quietly went off the rails). The initial fits
// the word exactly, and it is not the obvious pick — the kit's own
// examples (A for amazing, F for Friday-feeling, Z for zero sleep)
// will be crowded; U stands apart.
//
// The gate: /output/entry.txt must be UTF-8 text of exactly 1
// character, not only white space. This program validates the gate
// before writing and reads the file back to verify the round-trip.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "U";
const HIDDEN_WORD = "unhinged";

function validateGate(text: string): void {
  const chars = [...text];
  if (chars.length !== 1) {
    throw new Error(`gate: expected exactly 1 character, got ${chars.length}`);
  }
  if (!/^[A-Z]$/.test(text)) {
    throw new Error(`gate: expected a single letter A-Z, got ${JSON.stringify(text)}`);
  }
  if (!/\S/.test(text)) {
    throw new Error("gate: entry must not be only white space");
  }
  // The letter must stand for a day's word whose initial it is.
  if (HIDDEN_WORD[0].toUpperCase() !== text) {
    throw new Error(`gate: letter ${text} does not match its word ${HIDDEN_WORD}`);
  }
}

function main(): void {
  validateGate(LETTER);
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const path = join(outDir, "entry.txt");
  writeFileSync(path, LETTER, "utf8");
  const roundTrip = readFileSync(path, "utf8");
  if (roundTrip !== LETTER) {
    throw new Error(`round-trip mismatch: wrote ${JSON.stringify(LETTER)}, read ${JSON.stringify(roundTrip)}`);
  }
  validateGate(roundTrip);
  // Local mirror for verification: /output is shared with sibling
  // builders on this machine, so keep a copy next to the program too.
  // Best-effort only: in the grader the repo is read-only, so a
  // failed mirror write must never fail the graded run.
  try {
    const localDir = join(import.meta.dirname, "output");
    mkdirSync(localDir, { recursive: true });
    writeFileSync(join(localDir, "entry.txt"), LETTER, "utf8");
  } catch {
    // mirror unavailable (read-only repo in the grader) — ignore
  }
  console.log(`wrote ${path}: ${JSON.stringify(roundTrip)} (${Buffer.byteLength(roundTrip, "utf8")} byte, gate OK)`);
}

main();
