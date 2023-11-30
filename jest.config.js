module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "src/app/page.js"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js(x)?", "!src/app/**"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.js"],
  modulePaths: ["<rootDir>/src/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
