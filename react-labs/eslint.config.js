import globals from 'globals';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		ignores: ['**/backups'],
	},
	{
		name: '@speedingplanet/eslint-config',
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'no-unused-private-class-members': 'warn',
			'no-unused-vars': ['warn'],
			'prefer-const': 'off',
		},
	},
	{
		name: '@speedingplanet/eslint-config-typescript',
		files: ['**/*.ts', '**/*.tsx'],
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
	{
		name: 'react',
		files: ['**/*.jsx'],
		...reactPlugin.configs.flat.recommended,
	}
);
