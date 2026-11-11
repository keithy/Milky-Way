---
title: 'Brownfield migration without a rewrite'
author: 'Angelic Infrastructure'
date: '11-10-2026'
image:
    url: '/images/blog-post.webp'
    alt: 'Brownfield migration'
---

Make existing infrastructure inspectable in place. No forklift, no "we
will rebuild on the new stack next quarter".

The claim is that inspectability can be had without a rewrite, and that
the rewrite is almost always the wrong instrument. A system can be
made to declare itself — what it is, what it depends on, what it does —
without being replaced, and the declaration can be checked.

The instinct to rebuild comes from a real problem, which is that the
systems we inherit are illegible. But illegibility is a property of the
description, not of the machine. Fix the description first, and the
machine may turn out to be fine.
