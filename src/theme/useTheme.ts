import {useContext} from "react";
import {localStorageThemeKey, ThemeContext, ThemeVariants} from "./ThemeContext";

type UseThemeResult = {
    theme: ThemeVariants,
    toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem(localStorageThemeKey, newTheme);
    };

    return {theme, toggleTheme};
}