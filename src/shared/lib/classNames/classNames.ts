type Mods = Record<string, boolean>

export function classNames(className: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, boolFlag]) => Boolean(boolFlag))
            .map(([className]) => className),
    ]
        .join(' ');
}
