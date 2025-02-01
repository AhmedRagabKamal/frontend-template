import storybookPlugin from 'eslint-plugin-storybook';

import { GLOB_TS, GLOB_TSX } from '../utils/glob.js';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default {
  files: [GLOB_TS, GLOB_TSX],
  plugins: {
    storybook: storybookPlugin,
  },
  rules: {
    ...storybookPlugin.configs.recommended.rules,
  },
};
