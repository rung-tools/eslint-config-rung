module.exports = {
    extends: 'xo',
    plugins: ['mocha'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        node: true,
        es6: true
    },
    rules: {
        'indent': ['error', 4, {
            MemberExpression: 'off',
            flatTernaryExpressions: true
        }],
        'no-restricted-syntax': [
            'error',
            'ForStatement',
            'WhileStatement',
            'SwitchStatement',
            'VariableDeclaration[kind="var"]',
            'VariableDeclaration[kind="let"]'
        ],
        'capitalized-comments': ['off'],
        'mocha/no-exclusive-tests': ['error'],
        'no-console': ['error'],
        'unicorn/no-process-exit': ['off'],
        'xo/catch-error-name': ['off'],
        'operator-linebreak': ['error', 'before'],
        'object-curly-spacing': ['error', 'always'],
        'import/prefer-default-export': ['off'],
        'import/no-dynamic-require': ['off'],
        'no-useless-escape': ['off'],
        'unicorn/no-abusive-eslint-disable': ['off'],
        'quotes': ['error', 'single', { allowTemplateLiterals: false }],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }]
    },
    overrides: [{
        files: 'test/**/*.js',
        globals: {
            before: false,
            beforeAllf: false,
            describe: false,
            it: false
        },
        rules: {
            'handle-callback-err': ['off'],
            'no-unused-expressions': ['off'],
            'import/default': ['off']
        }
    }]
}
