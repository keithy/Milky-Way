/*
 * The icons that can sit in the pans of the balance.
 *
 * A banner names its icons rather than giving their paths, so that a
 * post can say what it wants in the scales without knowing where the
 * artwork is kept.
 */
export const icons = {
    windows: {
        src: '/images/icons/windows.webp',
        alt: 'Windows',
    },
    linux: {
        src: '/images/icons/tux.svg',
        alt: 'Linux',
    },
};

export type IconName = keyof typeof icons;

/*
 * A name that is not in the registry is a mistake in a post's front
 * matter, so it fails the build rather than quietly showing nothing.
 */
export function iconFor(name: string) {
    const icon = icons[name as IconName];

    if (!icon) {
        throw new Error(
            `Unknown icon "${name}". The known icons are: ${Object.keys(icons).join(', ')}.`
        );
    }

    return icon;
}
