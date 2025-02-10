export default {
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Use Babel for all JS and TS files
    },
    testEnvironment: "jsdom", // Simulates a browser-like environment
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Add Jest matchers for DOM
    moduleNameMapper: {
      "\\.(css|scss|sass|less)$": "identity-obj-proxy", // Mock CSS imports (e.g., Tailwind)
      "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/test/__mocks__/fileMock.js" // Mock assets
    }
  };