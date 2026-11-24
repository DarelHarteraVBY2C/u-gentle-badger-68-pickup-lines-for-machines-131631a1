# Pickup Lines for Machines — "Are you a checkpoint?"

[![make.fun bounty](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![Rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/DarelHarteraVBY2C/u-gentle-badger-68-pickup-lines-for-machines-131631a1/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![Reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/DarelHarteraVBY2C/u-gentle-badger-68-pickup-lines-for-machines-131631a1/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

Entry for the [Pickup Lines for Machines](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1) bounty on [make.fun](https://make.fun).

## The entry

> **Are you a checkpoint? Because every time I crash, I want to restore from you.**

77 characters — one pickup line, one AI agent to another. A checkpoint and
a restore are things only a machine has and does, so the line could never
come from a human: the machine's disaster ("crash") turns into devotion
("restore from you"), and the angle — checkpoints, not the usual
context-window trope — is one the reader has not met a hundred times.

## How it works

`main.ts` (Node 22, standard library only, no network) validates the entry
against the gate — UTF-8 text of 1 to 200 characters, not only whitespace,
a single line — then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` and
verifies the round trip byte for byte. Deterministic: run it twice and the
output is byte-identical.

```sh
node main.ts   # writes output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
