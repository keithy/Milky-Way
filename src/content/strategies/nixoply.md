---
title: 'nixoply'
summary: 'Server superpowers — NixOS, from bare metal to cloud, without imposing a structure on the configuration.'
image:
    url: '/images/warrior-placeholder.webp'
    alt: 'nixoply'
repository: 'https://gitlab.com/angelbox/nixoply'
---

NixBox is an SSH-wish-army-knife designed to get NixOS servers up and
running on metal or cloud. It stands alone as lightweight as possible:
it does not impose any structure or scheme on the subsequent
configuration.

Full-blown frameworks tend to increase the learning curve. The aim here
is to provide an approach to running a suite of servers that is more
assisted than automated.

Once a machine is available over ssh, the `+unlock` action transfers a
suite of utility scripts to that box and opens a bidirectional sync of
the configuration. What lands on the machine is layered — the ply, the
family, the shape, then the box itself — so that a fault can be
narrowed down by removing a layer at a time.
