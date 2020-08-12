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
        'indent': 'off',
        'quotes': 'off',
        'no-multiple-empty-lines': 'off'
    }
}
