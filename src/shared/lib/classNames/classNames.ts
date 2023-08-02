type Mods = Record<string, boolean | null | undefined>

export function classNames(
    className: string,
    mods: Mods = {},
    additional: (string | undefined | null)[] = [],
): string {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, boolFlag]) => Boolean(boolFlag))
            .map(([className]) => className),
    ]
        .join(' ');
}
