import { useContext } from 'react';
import { localStorageThemeKey, ThemeContext, ThemeVariants } from './ThemeContext';

type UseThemeResult = {
    theme: ThemeVariants,
    toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error(
            'useTheme has to be used within <ThemeContext.Provider>',
        );
    }

    const { theme, setTheme } = themeContext;

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem(localStorageThemeKey, newTheme);
    };

    return { theme, toggleTheme };
}
