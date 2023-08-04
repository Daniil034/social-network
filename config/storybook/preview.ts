import type { Preview } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
// @ts-ignore
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';
// @ts-ignore
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator';
// @ts-ignore
import lightTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../../src/app/styles/themes/light.scss';
// @ts-ignore
import darkTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../../src/app/styles/themes/dark.scss';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        cssVariables: {
            files: {
                light: lightTheme,
                dark: darkTheme,
            },
            defaultTheme: 'light',
        },
    },
    decorators: [
        cssVariablesTheme,
        ThemeDecorator,
        RouterDecorator,
        TranslationDecorator,
    ],
};

export default preview;
