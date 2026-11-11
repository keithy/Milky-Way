---
title: 'Gaps are where the work is'
author: Angelic Infrastructure
date: '10-14-2026'
image:
    url: '/images/blog-post.webp'
    alt: 'Bespoke tooling'
---

Off-the-shelf software is very good at the things everybody needs.
The awkward part is the bit between two products that were never
designed to meet: the integration nobody enjoys, the product that
almost fits, the script that grew into a load-bearing component with no
owner and no tests.

<div class="center">
  <img class="pro-img" src="/images/image-1.webp" alt="The gap" width="500px" height="281" loading="lazy" decoding="async">
</div>

That gap is usually where bespoke effort belongs. Not because the
commercial answer is wrong, but because the gap is specific to one
estate, and a general tool would have to be worse at everything else to
be right about it.

<div class="center">
  <img class="pro-img" src="/images/image-2.webp" alt="Tooling in place" width="500px" height="281" loading="lazy" decoding="async">
</div>

The discipline is in the shape of the tool. A command should be
hierarchical and composable, so that the common path is the short one
and the unusual path is still reachable. It should expose safe defaults
and make the dangerous path explicit rather than magical — a tool that
quietly guesses is a tool that eventually guesses wrong at three in the
morning.

This is what Groan is for, and what the Glamorous Toolkit is becoming:
not automation for its own sake, but infrastructure a team can
understand and change. The measure of good tooling is not how much it
can do. It is how little you have to know about it to use it safely.
