module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: ['**/?(*.)+(test).+(ts)'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
};
