import { colorThemeArray } from '../../../theme/ColorTheme'

export const argTypes = {
	componentSize: {
		options: ['medium', 'large']
	},
	colorTheme: {
		options: colorThemeArray
	}
}
