import { ReactNode } from 'react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export function withThemeProvider(children: ReactNode) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}
