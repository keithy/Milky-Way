---
title: 'Server farms'
description: 'Composable, repeatable infrastructure for teams that need dependable capacity across heterogeneous hardware and cloud environments.'
image:
    url: '/images/GitHub.webp'
    alt: 'Server farm'
banner:
    name: balance-even
    alt: A balance scale hanging level
missionImage1:
    url: '/images/image-1.webp'
    alt: 'Racked hardware'
missionImage2:
    url: '/images/image-2.webp'
    alt: 'Rack detail'
platform: Infrastructure
stack: NixOS, Talos, Pkl, ZFS
website: https://angelic.infrastructure/
github: https://gitlab.com/angelbox
---

The same declarative configuration, producing the same result on bare
metal, a hypervisor, or a managed instance. Immutable operating systems,
configuration as data, schemas that catch a bad declaration before it
reaches a machine, and a filesystem that keeps its promises about data.

A farm is not the collection of machines. It is the collection of ways
they are allowed to differ — and the whole design is aimed at making
that collection small, visible, and reproducible by somebody who was
not in the original conversation.
