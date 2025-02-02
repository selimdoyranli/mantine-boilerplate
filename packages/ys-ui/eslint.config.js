import js from '@eslint/js';
import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

const config = [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  },
  {
    ignores: [
      // Dependencies
      '**/node_modules/',
      '**/.pnpm-store/',

      // Build outputs
      '**/.next/',
      '**/out/',
      '**/dist/',
      '**/build/',

      // Package manager
      '**/pnpm-lock.yaml',
      '**/.pnpm-debug.log',

      // Cache & Generated
      '**/.eslintcache',
      '**/next-env.d.ts',

      // Config files
      '*.config.{js,ts,mjs}', // process all config files at once
      '**/tsconfig.json',

      // Environment
      '**/.env*',

      // IDE & System
      '**/.idea/',
      '**/.DS_Store',
    ],
  },
  {
    name: 'eslint/recommended',
    rules: js.configs.recommended.rules,
  },
  ...tseslint.configs.recommended,
  ...mantine,
  {
    name: 'custom',
    rules: {
      'no-duplicate-imports': ['off'],
    },
  },
];

export default config;
