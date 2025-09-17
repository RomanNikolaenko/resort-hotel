import angular from '@angular-eslint/eslint-plugin';
import ignores from './eslint.ignores.js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  prettierConfig,
  {
    ignores,
    files: ["src/**/*.ts", "src/**/*.js"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        browser: true
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
      '@angular-eslint': angular,
      prettier: prettierPlugin,
      'unused-imports': (await import('eslint-plugin-unused-imports')).default
    },
    rules: {
      'prettier/prettier': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      'unused-imports/no-unused-imports': 'warn'
    }
  },
  {
    files: ["src/**/*.js", "src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        browser: true
      }
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
    }
  },
  {
    files: ["src/**/*.html"],
    plugins: {
      '@angular-eslint': angular,
      '@angular-eslint/template': (await import('@angular-eslint/eslint-plugin-template')).default
    }
  }
];
