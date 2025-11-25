module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: ['import'],
  rules: {
    // Enforce using aliases instead of parent-relative imports
    'import/no-relative-parent-imports': 'error',

    // Keep imports tidy and grouped
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern:
              '{components,styles,config,navigation,screens,services,utils,assets}/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],

    // Avoid importing from the project root barrel to reduce cycles
    'no-restricted-imports': [
      'error',
      {
        paths: ['@', 'src'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.{ts,tsx,js,jsx}'],
      rules: {
        'import/no-relative-parent-imports': 'off',
      },
    },
    {
      files: ['**/components/**/*.tsx'],
      rules: {
        'import/no-internal-modules': [
          'error',
          {
            allow: ['components/**/index', 'components/**'],
          },
        ],
        // Restrict direct config file imports only in component implementation files (barrels exempt)
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['./*.config'],
                message:
                  'Import config types via the component folder barrel instead of direct file path.',
              },
            ],
          },
        ],
      },
    },
  ],
};
