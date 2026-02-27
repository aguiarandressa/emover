/**
 * ESLint (flat config) para JavaScript do projeto.
 * Foco em consistência e segurança, sem alterar UX.
 */
export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['assets/js/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        tailwind: 'readonly',
        console: 'readonly',
        globalThis: 'readonly',
      },
    },
    rules: {
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-implied-eval': 'error',
      'no-alert': 'warn',
    },
  },
];
