module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
    ],
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    rules: {
        'import/prefer-default-export': ['off'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
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
    },
    globals: {
        __IS_DEV__: true,
    },
};
