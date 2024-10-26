import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  // Definições do ambiente
  env: {
    browser: true,
    es2021: true,
  },
  // Configurações de parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // Extensões recomendadas
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  // Plugins
  plugins: ['react', 'tailwindcss'],
  // Regras personalizadas
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js não precisa importar React
    'tailwindcss/no-custom-classname': 'off', // Desativar se quiser usar classes personalizadas
  },
});
