import turboPlugin from 'eslint-plugin-turbo';
import onlyWarn from 'eslint-plugin-only-warn';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default {
  files: [GLOB_TS, GLOB_TSX],
  plugins: {
    turbo: turboPlugin,
    onlyWarn,
  },
  rules: {
    'turbo/no-undeclared-env-vars': 'warn',
  },
  ignores: ['dist/**'],
};
