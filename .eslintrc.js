module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'keyword-spacing': 'off',
        'space-before-function-paren': 'off',
        'space-before-blocks': 'off',
        'no-trailing-spaces': 'off',
        'indent': 'off',
        'quotes': 'off',
        'eol-last': 'off',
        'no-multiple-empty-lines': 'off'
    }
}
