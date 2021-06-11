import { ColorThemeValues } from '../../../types/ColorTheme'

export const argTypes = {
	size: {
		options: ['medium', 'large'],
		defaultValue: 'medium'
	},
	colorTheme: {
		options: ColorThemeValues,
		defaultValue: 'primary'
	}
}
