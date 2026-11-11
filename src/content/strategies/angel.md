---
title: 'angel'
summary: 'The command dispatcher — one front door for the whole estate.'
image:
    url: '/images/warrior-placeholder.webp'
    alt: 'angel'
repository: 'https://gitlab.com/angelbox/angelbox'
---

`angel` is the dispatcher. One command reaches the whole estate:
`angel --list all` shows everything that can be done, and
`angel <thing> <verb>` runs it.

It is a `groan` suite, and like every other suite it is composed rather
than written. The commands it knows about are the sub-tools — bashaform,
nixbox, specs-tool, probe-tool, tf-tool, formae-tool, the ssh tools —
each of which is a suite in its own right, and each of which knows
nothing about the others.

The point of the single door is that the shape of the work is visible.
Asking what is possible should not require knowing how the estate is
laid out.
