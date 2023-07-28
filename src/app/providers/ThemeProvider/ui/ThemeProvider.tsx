import { PropsWithChildren, useMemo, useState } from 'react';
import {
    localStorageThemeKey,
    ThemeContext,
    ThemeVariants,
} from 'features/ThemeSwitcher/lib/ThemeContext';

export function ThemeProvider({ children }: PropsWithChildren) {
    const defaultTheme = localStorage.getItem(localStorageThemeKey) as ThemeVariants || 'light';
    const [theme, setTheme] = useState<ThemeVariants>(defaultTheme);

    const value = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
