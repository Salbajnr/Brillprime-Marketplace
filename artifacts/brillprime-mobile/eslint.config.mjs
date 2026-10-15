import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/*', 'expo-env.d.ts', 'static-build/**'],
  },
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        __DEV__: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
  },
);
