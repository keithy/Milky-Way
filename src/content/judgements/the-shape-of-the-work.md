---
title: 'The shape of the work'
author: Angelic Infrastructure
date: '11-06-2026'
draft: true
image:
    url: '/images/blog-post.webp'
    alt: 'Working notes'
---

This post is a draft. It is built into the site, but it is only shown
when the site is in the UT mode — that is, when the browser's user
agent contains "Developer".

The point of the mode is that content can be worked on in place, in
the real site, with the real styles and the real typography, without
publishing it. Nothing about a draft is visible to anyone else.

## What the mode is for

Working in the actual environment beats working in a mockup. The
measure is wrong in a mockup. The line length is wrong. The thing that
looks fine in a component library falls apart at 756 pixels.

So the drafts live here, in the site, and the mode is what decides
whether they are on.

<div class="center">
  <img class="pro-img" src="/images/image-1.webp" alt="Working notes" width="500px" height="281" loading="lazy" decoding="async">
</div>

A draft is marked with `draft: true` in its front matter. The content
schema allows it, the list pages hide the card, and the post's own page
hides its body — all of it keyed off the same class, all of it applied
by the stylesheet rather than by the build.

That last part matters. The drafts are built into the production
files. They are hidden with CSS, not excluded from the build. So the
mode can be switched in the browser, on a live site, without a
redeploy.

Which also means the drafts are in the page source for anyone who looks
for them. That is a fair trade for the convenience, on a site that is
not public — but it is a trade, and it should be a conscious one.
