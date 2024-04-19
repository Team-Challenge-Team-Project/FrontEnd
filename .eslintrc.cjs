module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'max-len': ['error', { code: 120 }],
    'no-console': 'off',
    'comma-dangle': 0,
    'no-unused-vars': 'warn',
    'no-trailing-spaces': 'error',
    'react-hooks/rules-of-hooks': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'webpack.config.js'],
};
