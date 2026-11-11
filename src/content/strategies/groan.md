---
title: 'groan'
summary: 'The command dispatching framework beneath everything else — hierarchical CLIs composed from bash.'
image:
    url: '/images/warrior-placeholder.webp'
    alt: 'groan'
repository: 'https://gitlab.com/keithy/groan-dev'
---

`groan` is a basis for building complex hierarchical command interfaces
with bash and other languages, and it aspires to achieve this with some
degree of elegance, through hierarchical composition.

The whole estate is built on it. `angel` is a groan suite, `bashaform`
is a groan suite, and so are the tools that sit inside them. A command
is found by its path rather than by a table of aliases, so the shape of
the command line follows the shape of the thing being operated.

The rule that makes it work: a sub-tool owns its own commands and
knows nothing about its siblings. Composition happens by inclusion, so
a suite is a tree rather than a program.
