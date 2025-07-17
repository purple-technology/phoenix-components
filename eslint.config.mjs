import js from '@eslint/js';
import globals from 'globals';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import json from 'eslint-plugin-json';

export default [
  // Base configuration for all files
  js.configs.recommended,
  
  // TypeScript files configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
				...globals.vitest,
				...globals.es2025
			},
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': true,
          'ts-check': false,
        },
      ],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': 'warn',
      
      // Prettier
      'prettier/prettier': 'error',
      
      // React Hooks
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      
      // Import sorting
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

			// Rules below suppressed for now due to large amount of changes needed
			'no-redeclare': 'off',
			'no-irregular-whitespace': 'off',
			'no-unused-vars': 'off',
			'no-useless-escape': 'off',
			'no-undef': 'off',
    },
  },
  
  // React files configuration
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react,
    },
    rules: {
      'react/prop-types': 'off',
      'react/display-name': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  
  // Storybook files configuration
  {
    files: ['.storybook/**/*.{js,ts,jsx,tsx}', '**/*.stories.{js,ts,jsx,tsx}'],
    plugins: {
      storybook,
    },
  },
  
  // JSON files configuration
  {
    files: ['**/*.json'],
		...json.configs["recommended"]
  },
  
  // Ignore patterns
  {
    ignores: [
			'bin/**',
      'dist/**',
      'node_modules/**',
      'storybook-static/**',
      'storybook-build-v4/**',
      '*.config.js',
      '*.config.mjs',
			"public/design-tokens.source.json"
    ],
  },

	prettierRecommended
]; 
