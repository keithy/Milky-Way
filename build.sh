#!/usr/bin/env bash
#
# Build the Angelic Infrastructure website.
#
# The site is an Astro application. It is built to a staging directory
# and then moved into place, because Astro empties its output directory
# before building and the output directory is the root mutagen watches.
#
# An emptying root makes mutagen halt the session, and the box goes on
# serving the previous build. Staging means the watched root is never
# empty: it is replaced rather than emptied.
#
# The node and pnpm versions come from the box's mise config, so the
# toolchain is the same for every site and does not depend on what is
# installed globally. A fresh clone needs `mise trust` on those
# configs before mise will run them.
#
# Usage:
#   ./build.sh              build the site
#
set -euo pipefail

bashaform="${BASH_SOURCE[0]%/*}"
cd "${bashaform}"

staged="${bashaform}/.staged"
target="${bashaform}/dist"

printf 'building angelic\n'

rm -rf "$staged"

# --no-lockfile because the upstream examples carry no lockfile, and
# writing one leaves an untracked file in the repo.
mise exec -- pnpm install --ignore-workspace --no-lockfile
mise exec -- pnpm exec astro build --site "https://angelic.gets-it.net" --outDir "$staged"

# Move the staged build into place.
#
# rsync with --delete-after, not a move and not a delete-then-copy.
# The watched root is the dist/ directory, and mutagen halts if it
# observes the root empty — so the root must never be empty, and the
# directory is never unlinked.
#
# rsync copies the new build in over the top and only then removes
# what is stale, so at no point is the root empty and the directory is
# not unlinked. A plain rm followed by a copy would empty it, and a mv
# would replace it; both stop the session.
mkdir -p "$target"
rsync --recursive --delete-after --quiet "${staged}/" "$target/"
rm -rf "$staged"

printf 'site built in %s\n' "$target"
