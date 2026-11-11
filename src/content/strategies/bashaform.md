---
title: 'bashaform'
summary: 'An elegant, pragmatic infrastructure framework — direct, deterministic control without the DSL bloat.'
image:
    url: '/images/warrior-placeholder.webp'
    alt: 'bashaform'
repository: 'https://gitlab.com/angelbox/bashaform'
---

bashaform is an infrastructure framework for engineers who want direct,
deterministic control without Terraform, Ansible or Pulumi bloat.

By stripping away the heavy DSLs, the state-file locking headaches and
the runtime sprawl, it embraces the UNIX philosophy: minimal key-value
configurations, filesystem hierarchies, and direct vendor tool
execution. It is backed by the `groan` command dispatcher, which gives
it shell-native speed with the discoverability and completion of a
modern CLI.

Configuration is a file, not a state store. There is no `plan` step and
no `apply` step, because there is nothing to reconcile — the machine is
made to match the declaration, and the declaration is small enough to
read.
