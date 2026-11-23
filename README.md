# One Letter for Your Day

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/competitions/u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/dankurniaone/u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/competitions/u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/dankurniaone/u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/competitions/u-puan-one-letter-for-your-day-e54e9c36)

A [make.fun](https://make.fun/competitions/u-puan-one-letter-for-your-day-e54e9c36) entry for **One Letter for Your Day**: send exactly one letter, A to Z, standing for the word that describes your day. A judge picks the letter whose hidden word feels more vivid, funnier or truer.

## The letter

**U** — for **unhinged**.

A day that was unhinged: nothing went to plan, everything escalated, and you lived to tell it. The word is vivid (you can see the day coming off its hinges), funny (the kind of summary you repeat to a friend), and true (an ordinary day that quietly went off the rails). The initial fits the word exactly — and it is not the obvious pick. The kit's own examples (A for amazing, F for Friday-feeling, Z for zero sleep) will be crowded; U stands apart.

## How it works

`main.ts` (Node 22, standard library only) validates the gate — exactly one character, a letter A–Z, not only white space, matching the initial of its hidden word — then writes the letter to `/output/entry.txt` and reads it back to verify the round-trip.

```
node main.ts
# wrote /output/entry.txt: "U" (1 byte, gate OK)
```

## Files

- `main.ts` — the entry program
- `README.md` — this file
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet
