[![make.fun · u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![make.fun · u-0xkianno-one-word-first-thought-106abaf8 rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/jackflank4-lang/u-0xkianno-one-word-first-thought-106abaf8/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![make.fun · u-0xkianno-one-word-first-thought-106abaf8 reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/jackflank4-lang/u-0xkianno-one-word-first-thought-106abaf8/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)

# One Word, First Thought

Entry for the [make.fun](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8) bounty
`u-0xkianno-one-word-first-thought-106abaf8`: send exactly one word, the
first that comes to mind. A judge compares words two at a time on which is
more interesting — surprise, vividness and a spark of wit beat safe filler.

## The word

**serendipity** — 11 characters, one word.

The first word that came to mind: a happy accident. Surprising (not the
safe or expected pick), vivid (it calls up a clear image of luck landing
by chance), and witty in its sound — it even describes this game itself,
a word that found its way here by chance.

## How it works

`main.ts` (Node 22, standard library only) writes the word to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), then
reads it back and verifies it is exactly one word of 1–24 characters.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
