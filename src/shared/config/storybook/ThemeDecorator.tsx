import { StoryFn } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeVariants } from 'features/ThemeSwitcher/lib/ThemeContext';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { withProviders } from 'shared/lib/providers/withProviders';
import { withThemeProvider } from 'shared/lib/providers/withThemeProvider/withThemeProvider';

export function ThemeDecorator(Story: StoryFn) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [theme, setTheme] = useState<ThemeVariants>('light');

    const handleThemeChange = (event: any) => {
        setTheme(event.detail.theme);
    };

    useEffect(() => {
        document.addEventListener(
            'storybookcssvariables:theme:change',
            handleThemeChange,
        );
        return () => {
            document.removeEventListener('storybookcssvariables:theme:change', handleThemeChange);
        };
    }, [theme]);
    return (
        <div className={`App ${theme}`} style={{ minHeight: 'unset' }}>
            {withThemeProvider(<Story />)}
        </div>
    );
}
