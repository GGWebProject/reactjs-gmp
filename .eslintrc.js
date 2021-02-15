module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:jest/recommended',
		'plugin:jest/style',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'import/prefer-default-export': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: ['warn', 'tab'],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['warn', 'always'],
		'react/react-in-jsx-scope': 'warn',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-indent': [2, 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-uses-react': 'warn',
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
	},
};
