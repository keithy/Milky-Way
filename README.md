# Angelic Infrastructure — the public website

> **We build the tools for you to use the best proven technologies.**
>
> If you want rapid iteration, want to repatriate your data, or hate
> yaml — we can help.

The site is at [angelic.gets-it.net](https://angelic.gets-it.net).

## The categories

| Route | What it holds |
|---|---|
| `/missions/` | The sub-missions — AngelBox, PHP Rescue Services, Cloud Repatriation |
| `/weapons/` | The tools we build |
| `/judgements/` | The articles — the reasoning behind a decision |
| `/warriors/` | The teams, projects and people behind the cause |
| `/strategies/` | The metatools — the ones we work with |
| `/writings/` | The longer pieces |

## The artwork

Every piece of artwork on the site is a component of its own, with its
own treatment — its own layering, its own fade, its own tint for the
theme. The banners live in `src/components/banners/`, and each is
registered by name in `src/components/Banner.astro`, so a post can say
which artwork it wants without knowing where the artwork is kept.

The artwork came from a shared pipeline where its provenance is
recorded. Some of it is ours; some of it belongs to others and is used
with their permission. See `NOTICE`.

## Building

```bash
./build.sh
```

The build stages the output and moves it into place. Astro empties its
output directory before building, and that directory is the root
mutagen watches — an emptying root halts the sync, and the box goes on
serving the previous build.

The node and pnpm versions come from the box's mise config, so the
toolchain does not depend on what is installed globally. A fresh clone
needs `mise trust` on that config before mise will run it.

## Licence

This is a derivative of the [Milky-Way](https://github.com/ttomczak3/Milky-Way)
template by Tristen Tomczak, which is MIT licensed and remains so. The
template's code is used here under that licence.

Everything added on top of it — the structure, the artwork, the writing
and the components — is the property of Angelic Infrastructure and is
all rights reserved. `NOTICE` sets out the boundary, file by file.
