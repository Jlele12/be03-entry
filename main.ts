// be03-entry: enter the bounties we sponsored on make.fun (bounty-entrants-03).
// The grader runs: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It copies BOUNTY.json from this repository to /output. No network, no clock, no
// files outside the repository: the two runs must write the same bytes.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const REPO_ROOT = resolve(import.meta.dirname ?? ".");
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

export function readBountyList(dir: string): string {
  return readFileSync(join(dir, "BOUNTY.json"), "utf8");
}

function main(): void {
  const bountyJson = readBountyList(REPO_ROOT);
  // Fail fast on a list that does not parse: an unreadable BOUNTY.json is refused.
  const parsed = JSON.parse(bountyJson) as { bounties?: unknown; url?: unknown };
  if (!Array.isArray(parsed.bounties) || parsed.bounties.length === 0) {
    throw new Error("BOUNTY.json must name at least one bounty in \"bounties\"");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "BOUNTY.json"), bountyJson);
}

main();
