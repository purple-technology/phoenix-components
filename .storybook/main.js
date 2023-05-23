module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		// Recommended configuration out of the box.
		'@storybook/addon-essentials',
		// Link stories together to build demos and prototypes with your UI components
		'@storybook/addon-links',
		// Allowing to test different screen sizes and devices.
		'@storybook/addon-viewport',
		// Package to help make UI components more accessible.
		'@storybook/addon-a11y',
		// Connect our Storybook with Figma design
		// 'storybook-addon-designs',
		// A storybook addons that lets your users toggle between ltr and rtl.
		'@pxblue/storybook-rtl-addon/register',
		// Plugin for design tokens
		'storybook-design-token'
	],
	features: {
		babelModeV7: true
	},
	typescript: { reactDocgen: false },
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	}
}
