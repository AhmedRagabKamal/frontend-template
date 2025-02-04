const buildEslintCommand = (filenames) => {
  // Group files by package/root
  const filesByPackage = filenames.reduce((acc, filename) => {
    // Get the package directory (apps/* or packages/*)
    const parts = filename.split('/');
    const packagePath =
      parts[0] === 'apps' || parts[0] === 'packages' ? parts.slice(0, 2).join('/') : 'root';

    if (!acc[packagePath]) {
      acc[packagePath] = [];
    }
    acc[packagePath].push(filename);
    return acc;
  }, {});

  // Build eslint commands for each package
  return Object.entries(filesByPackage).map(([packagePath, files]) => {
    // Use root config for files in the root directory
    const configPath =
      packagePath === 'root' ? './eslint.config.js' : `${packagePath}/.eslintrc.js`;

    return `eslint --fix ${files.join(' ')} --config ${configPath} --max-warnings 0`;
  });
};

const buildPrettierCommand = (filenames) => {
  return `prettier --write ${filenames.join(' ')}`;
};

export default {
  // Lint & Format TypeScript and JavaScript files
  '*.{js,jsx,ts,tsx}': (filenames) => {
    const eslintCommands = buildEslintCommand(filenames);
    const prettierCommand = buildPrettierCommand(filenames);
    return [...eslintCommands, prettierCommand];
  },

  // Format other files
  '*.{json,md,mdx,css,scss}': buildPrettierCommand,

  // Format package.json files
  'package.json': buildPrettierCommand,
};
