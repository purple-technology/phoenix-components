module.exports = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		// Recommended configuration out of the box.
		'@storybook/addon-essentials',
		// Link stories together to build demos and prototypes with your UI components
		'@storybook/addon-links',
		// Allowing to test different screen sizes and devices.
		'@storybook/addon-viewport',
		// Package to help make UI components more accessible.
		'@storybook/addon-a11y',
		// A storybook addons that lets your users toggle between ltr and rtl.
		'@pxblue/storybook-rtl-addon/register',
		// Plugin for design tokens
		'storybook-design-token'
	],
	core: {},
	features: {
		babelModeV7: true
	},
	framework: {
		name: '@storybook/react-webpack5',
		options: {
			fastRefresh: true
		}
	},
	docs: {
		autodocs: true
	},
	async webpackFinal(config) {
		// Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test('.svg')
		)
		fileLoaderRule.exclude = /\.svg$/

		config.module.rules.push({
			test: /\.svg$/,
			enforce: 'pre',
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						memo: true,
						icon: true
					}
				}
			]
		})

		return config
	}
}
