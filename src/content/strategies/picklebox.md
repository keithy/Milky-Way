---
title: 'picklebox'
summary: 'The conceptual model of a box — the base types, the four orthogonal classes, and the resolvers.'
image:
    url: '/images/warrior-placeholder.webp'
    alt: 'picklebox'
repository: 'https://gitlab.com/angelbox/picklebox'
---

Picklebox is the conceptual model for an Angelbox box. It owns the base
types — `Box`, `Instance`, `Location`, `BoxSettings` — the four
orthogonal classes (`Ssh`, `Probe`, `Unlock`, `Nixoply`), the resolver
set (`simple-host`, `nixoply`, `website`), and the bash pipeline that
projects a `box.pkl` and `shape.pkl` pair into the configuration that
lands on the machine.

The four classes are orthogonal on purpose. A box is reachable over
ssh, it is probed for its facts, it can be unlocked for local changes,
and it can be configured by nixoply — four separate concerns, four
separate tools, none of which needs to know the others exist.

The configuration is Pkl, so it is typed. A box that does not say what
it is will not compile.
