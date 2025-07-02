import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.eslint.json',
      },
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/self-closing-comp': 'warn',
      'react/jsx-curly-brace-presence': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-pascal-case': 'warn',
      'react/jsx-key': 'warn',
      'react/no-unused-state': 'warn',
      'react/no-direct-mutation-state': 'warn',
      'react/destructuring-assignment': 'warn',
      'react/prop-types': 'off',

      'no-unused-vars': 'warn',
      'dot-notation': 'warn',
      eqeqeq: 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-multiple-empty-lines': 'warn',
      'no-var': 'warn',
    },
  },
]);
