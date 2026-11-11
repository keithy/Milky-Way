// The three main pages — the index, the missions list and the
// judgements list — zoom the backdrop in on the way out, and hold the
// navigation until the zoom has finished.
//
// The pages that are already zoomed, the detail pages, have nothing to
// animate and navigate straight away. This script is only loaded on the
// main pages.
//
// A document unload gives the browser nothing to animate from, so the
// zoom has to happen while the page is still alive. That is what the
// delay is for.

// Wrapped so the names below stay out of the global scope. Another
// script on the page may declare the same names, and a global const
// cannot be declared twice.
(() => {

const zoomDuration = 800;

// The detail pages are the ones under a category. The list pages share
// the prefix, so they are excluded.
const detailPagePrefixes = [
    "/missions/",
    "/weapons/",
    "/judgements/",
    "/warriors/",
    "/strategies/",
    "/writings/",
];

const isDetailPage = (destination) =>
    detailPagePrefixes.some((prefix) =>
        destination.startsWith(prefix) &&
        destination !== prefix);

document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) {
        return;
    }

    // Let the browser handle anything modified, or aimed somewhere new.
    if (event.metaKey || event.ctrlKey || event.shiftKey ||
        event.button !== 0 || link.target === "_blank") {
        return;
    }

    const destination = link.getAttribute("href");

    // Only links that go somewhere. Anchors and empty hrefs stay on the
    // page.
    if (!destination || destination.startsWith("#")) {
        return;
    }

    // The zoom only makes sense when the destination is already zoomed —
    // a post, a project, or somewhere off the site. Going from one main
    // page to another has nothing to zoom into, so it goes straight.
    const leavesTheSite = !destination.startsWith("/");

    if (!isDetailPage(destination) && !leavesTheSite) {
        return;
    }

    // When the reader has asked their system to reduce motion, the zoom
    // does not happen — so the navigation should not be held back
    // either. A pause with nothing happening is worse than no pause.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    event.preventDefault();

    // Zoom in, and hold the navigation until it has finished. The
    // unzoomed class stays, so the leaving rule is the one that takes
    // effect.
    document.documentElement.classList.add("leaving");

    setTimeout(() => {
        window.location.href = link.href;
    }, zoomDuration);
});

})();
