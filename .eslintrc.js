module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['i18next', 'react-hooks'],
    rules: {
        'import/prefer-default-export': ['off'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'react/require-default-props': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'no-underscore-dangle': 'off',
        'max-len': [2, {
            ignoreComments: true,
            code: 100,
            ignoreUrls: true,
            ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        }],
        'import/no-import-module-exports': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    }],
};
