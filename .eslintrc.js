module.exports = {
  root: true,
  ignorePatterns: [
    '/.next',
  ],
  extends: [
    '@nf-team/eslint-config',
    'plugin:@next/next/recommended',
  ],
  plugins: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.tsx', '.json'],
      },
    },
  },
  rules: {
    'react/require-default-props': 'off',
    'import/order': 'off',
    '@next/next/no-html-link-for-pages': ['error', 'app/'],
    '@typescript-eslint/no-explicit-any': 'warn',
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^\\u0000'],
        ['^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'],
        ['^react'],
        ['^next'],
        ['^@?\\w'],
        ['^(@|lib|components|utils|hooks|stores)(/.*|$)'],
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ['^.+\\.svg$'],
        ['^.+\\.s?css$'],
      ],
    }],
  },
};
