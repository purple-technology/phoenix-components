import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

	addons: [
		// Link stories together to build demos and prototypes with your UI components
		'@storybook/addon-links',
		// Package to help make UI components more accessible.
		'@storybook/addon-a11y',
		// Plugin for design tokens
		'sb-design-token',
		'@storybook/addon-docs'
	],

	framework: '@storybook/react-vite'
}

export default config
