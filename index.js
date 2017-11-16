module.exports = {
    extends: [
        'xo',
        'plugin:ramda/recommended'
    ],
    plugins: [
        'mocha',
        'ramda'
    ],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    env: {
        node: true,
        es6: true
    },
    rules: {
        'indent': ['error', 4, { MemberExpression: 'off' }],
        'no-restricted-syntax': [
            'error',
            'ForStatement',
            'WhileStatement',
            'SwitchStatement',
            'VariableDeclaration[kind="var"]',
            'VariableDeclaration[kind="let"]'
        ],
        'semi': ['error', 'never'],
        'capitalized-comments': ['off'],
        'no-useless-escape': ['off'],
        'quotes': ['error', 'single', { allowTemplateLiterals: false }],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-console': ['error'],
        'operator-linebreak': ['error', 'before'],
        'object-curly-spacing': ['error', 'always'],
        'mocha/no-exclusive-tests': ['error'],
        'unicorn/no-process-exit': ['off'],
        'unicorn/no-abusive-eslint-disable': ['off'],
        'xo/catch-error-name': ['off'],
        'import/prefer-default-export': ['off'],
        'import/no-dynamic-require': ['off'],
    },
    overrides: [{
        files: 'test/**/*.js',
        globals: {
            before: false,
            beforeEach: false,
            after: false,
            afterEach: false,
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
