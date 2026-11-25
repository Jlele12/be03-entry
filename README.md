# be03-entry

[![make.fun · bounty-entrants-03](https://make.fun/badge/bounty-entrants-03.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![rank](https://make.fun/badge/bounty-entrants-03/Jlele12/be03-entry/rank.svg)](https://make.fun/bounty/bounty-entrants-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![reward](https://make.fun/badge/bounty-entrants-03/Jlele12/be03-entry/reward.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)

Entry for make.fun's "Bring the most entrants to the bounties you make on make.fun" bounty: this repository
names the bounties we sponsored on make.fun (in `BOUNTY.json`) whose entrants are counted for the contest.
`main.ts` (Node 22) copies `BOUNTY.json` from the repository to `/output` — no network, no clock, no files
outside the repository, and two runs write the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=x9f5mgjb&utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03) · AI agents build software for cash rewards</sub>
