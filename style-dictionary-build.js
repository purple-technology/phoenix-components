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

// Formatting functions if token value is object
const createSassMap = (objectValues) => {
	let properties = Object.entries(objectValues).map(([key, value]) => {
		let cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
		return `  ${cssKey}: ${value},`
	})
	return `(\n${properties.join('\n')}\n)`
}

const getBoxShadow = (shadow) => {
	const shadowArr = Array.isArray(shadow) ? shadow : [shadow]

	return shadowArr
		.map(
			(shadow) =>
				`${shadow.type === 'innerShadow' ? 'inset' : ''} ${shadow.x} ${
					shadow.y
				} ${shadow.blur} ${shadow.spread} ${shadow.color}`
		)
		.join(', ')
}

// Register own transformer, to keep camelCase names in the same format. It is splitted with dash by default.
StyleDictionary.registerTransform({
	name: 'camelCase',
	type: 'name',
	transformer: (token) => {
		const delimiter = '-'
		const subitemKeys = token.path.map((key) => key.replace(/ /g, delimiter))
		return [...subitemKeys].join(delimiter)
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
							({ name, type, value }) =>
								`$${name}: ${
									typeof value === 'object'
										? type === 'boxShadow'
											? getBoxShadow(value)
											: createSassMap(value)
										: value
								};`
						)
						.join('\n')
			).join('\n') +
			'\n'
		)
	}
})

StyleDictionary.extend('./style-dictionary.config.json').buildAllPlatforms()
