module.exports = {
  root: true,
  globals: {
    preval: false,
    "__CLIENT": true,
    "__SERVER": true,
    "__PUBLIC_PATH": true,
    "__API_URL": true,
    "__GRAPHQL_URL": true,
  },
  parser: 'babel-eslint',
  'extends': [
    'airbnb',
    'plugin:import/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: [
    'react',
    'import',
    'mocha',
    'jsx-a11y',
    'prettier'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
        'webpack': {
          config: 'webpack.config.js'
        },
        'alias': [
          ['redux-form', 'redux-form-draftjs'],
          ['redux-form-actions', 'redux-form-actions-draftjs']
        ]
      },
  },
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/require-default-props': 0,
    'react/prop-types': 'off',
    "import/no-unresolved": [
      "error",
      {
        "ignore": ['test/']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        trailingComma: 'es5',
        semi: false,
      }
    ],
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-skipped-tests': 'error',
  }
}
