// https://tailwindcss.com/docs/configuration
// import { createRequire } from 'node:module';
// import path from 'node:path';
import { defaultPreset } from '@frontend-template/ui-core';
import type { Config } from 'tailwindcss';

// const require = createRequire(import.meta.url);

export default {
  presets: [defaultPreset],
  content: ['../../packages/ui-core/src/**/*.{js,ts,jsx,tsx}', './index.html', './src/**/*.tsx'],
} satisfies Config;
