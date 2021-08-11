module.exports = {
  displayName: 'Schematics Core',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../coverage/modules/schematics-core',
  transform: { '^.+\\.(ts|js|html)$': 'jest-preset-angular' },
};
