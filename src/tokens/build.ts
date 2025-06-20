import StyleDictionary from 'style-dictionary'
import { fileHeader } from 'style-dictionary/utils'

import { getBoxShadow } from './helpers'

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

const DEFAULT_PRESENTERS = [
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

const CUSTOM_PRESENTER_PAIRS = [
	['Sizing', 'Spacing'],
	['BorderWidth', 'Spacing'],
	['BoxShadow', 'Shadow'],
	['LineHeights', 'LineHeight'],
	['FontFamilies', 'FontFamily'],
	['FontWeights', 'FontWeight'],
	['FontSizes', 'FontSize']
]

const PRESENTERS = CUSTOM_PRESENTER_PAIRS.concat(
	DEFAULT_PRESENTERS.map((item) => [item, item])
)

// Capitalize first letter to respect the addon parser for finding the right Presenter
const sanitizeString = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

// Set correct presenter for unsupported token types
const setPresenter = (category: string): string => {
	const item = sanitizeString(category)
	const entry = PRESENTERS.find(([key]) => key === item)
	return entry ? entry[1] : ''
}

// Formatting function if token value is object
const createSassMap = (objectValues: object): string => {
	const properties = Object.entries(objectValues).map(([key, value]) => {
		const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
		return `  ${cssKey}: ${value},`
	})
	return `(\n${properties.join('\n')}\n)`
}

// Register own transformer, to keep camelCase names in the same format. It is splitted with dash by default.
StyleDictionary.registerTransform({
	name: 'camelCase',
	type: 'name',
	transform: (token) => {
		const delimiter = '-'
		const subitemKeys = token.path.map((key) => key.replace(/ /g, delimiter))
		return [...subitemKeys].join(delimiter)
	}
})

StyleDictionary.registerTransformGroup({
	name: 'custom/scss',
	transforms: StyleDictionary.hooks.transformGroups['scss'].concat([
		'camelCase'
	])
})

// Register your own format, print comment with correct presenter and token itself
StyleDictionary.registerFormat({
	name: `customFormat`,
	format: async ({ dictionary, file }) => {
		return (
			(await fileHeader({ file })) +
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

await new StyleDictionary('style-dictionary.config.json').buildAllPlatforms()
