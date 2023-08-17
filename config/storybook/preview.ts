import type { Preview } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import lightTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../../src/app/styles/themes/light.scss';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
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
