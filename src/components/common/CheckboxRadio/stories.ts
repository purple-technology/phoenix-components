import { colorThemeArray } from '../../../theme/ColorTheme'

export const argTypes = {
	size: {
		options: ['medium', 'large']
	},
	colorTheme: {
		options: colorThemeArray
	}
}
