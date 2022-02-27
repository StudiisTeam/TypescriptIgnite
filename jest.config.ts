import { pathsToModuleNameMapper } from "ts-jest/utils"
import { compilerOptions } from "./tsconfig.json"
export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts"],
};
