/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	testEnvironment: 'jest-fixed-jsdom',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
	testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
	moduleNameMapper: {
		// Suggested here: https://stackoverflow.com/a/54117206
		// This is a bad solution which Jest should be criticized for
		'^lodash-es$': 'lodash',

		// Mock out imports of CSS files
		// see https://jestjs.io/docs/webpack#handling-static-assets
		'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	testEnvironmentOptions: {
		customExportConditions: [''],
	},
};
