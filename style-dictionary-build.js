// eslint-disable-next-line @typescript-eslint/no-var-requires
const StyleDictionary = require('style-dictionary').extend(
	'./style-dictionary.config.json'
)

console.log('Build started...')

const DESIGN_TOKEN_TYPES = [
	'color',
	'fontFamilies',
	'fontSizes',
	'fontWeights',
	'lineHeights',
	'other',
	'spacing',
	'sizing',
	'boxShadow',
	'borderRadius',
	'borderWidth',
	'typography'
]

const PRESENTERS = [
	'Animation',
	'Border',
	'BorderRadius',
	'Color',
	'Easing',
	'FontFamily',
	'FontSize',
	'FontWeight',
	'LetterSpacing',
	'Lineheight',
	'Opacity',
	'Shadow',
	'Spacing'
]

const PRESENTERS_MAP = new Map([
	...PRESENTERS.map((item) => [item, item]),
	['Sizing', 'Spacing'],
	['BorderWidth', 'Spacing'],
	['BoxShadow', 'Shadow'],
	['LineHeights', 'LineHeight'],
	['FontFamilies', 'FontFamily'],
	['FontWeights', 'FontWeight'],
	['FontSizes', 'FontSize']
])

// Capitalize first letter to respect the addon parser for finding the right Presenter
const sanitizeString = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

// Set correct presenter for unsupported token types
const setPresenter = (category) => {
	const item = sanitizeString(category)
	return PRESENTERS_MAP.get(item) || ''
}

// Formatting function if token value is object
const createSassMap = (objectValues) => {
	let properties = Object.entries(objectValues).map(([key, value]) => {
		let cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
		return `  ${cssKey}: ${value},`
	})
	return `(\n${properties.join('\n')}\n)`
}

// Register own transformer, to keep camelCase names in the same format
StyleDictionary.registerTransform({
	name: 'camelCase',
	type: 'name',
	transformer: (token) => {
		// Use a custom delimiter for the root-level keys
		const delimiter = '-'

		// Join the nested subitem keys using camel case
		const subitemKeys = token.path
			.slice(1)
			.map((key) => key.replace(/ /g, delimiter).toLowerCase())

		return [token.path[0], ...subitemKeys].join(delimiter)
	}
})

StyleDictionary.registerTransformGroup({
	name: 'custom/scss',
	transforms: StyleDictionary.transformGroup['scss'].concat(['camelCase'])
})

// Register your own format, print comment with correct presenter and token itself
StyleDictionary.registerFormat({
	name: `customFormat`,
	formatter: ({ dictionary, file }) => {
		return (
			StyleDictionary.formatHelpers.fileHeader({ file }) +
			'\n' +
			DESIGN_TOKEN_TYPES.map(
				(item) =>
					`\n/**
* @tokens ${sanitizeString(item)}
* @presenter ${setPresenter(item)}
*/\n` +
					dictionary.allTokens
						.filter((token) => item === token.type)
						.map(
							(token) =>
								`$${token.name}: ${
									typeof token.value === 'object'
										? createSassMap(token.value)
										: token.value
								};`
						)
						.join('\n')
			).join('\n') +
			'\n'
		)
	}
})

StyleDictionary.buildAllPlatforms()
