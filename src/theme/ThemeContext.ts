import {createContext} from "react";

export type ThemeVariants = "light" | "dark";

type ThemeContextProps = {
    theme: ThemeVariants,
    setTheme: (theme: ThemeVariants) => void;
}

export const localStorageThemeKey = "theme";

export const ThemeContext = createContext<ThemeContextProps | null>(null);