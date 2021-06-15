import { ColorTheme } from '../../../types/ColorTheme'

export const argTypes = {
	size: {
		options: ['medium', 'large'],
		defaultValue: 'medium'
	},
	colorTheme: {
		options: ColorTheme,
		defaultValue: 'primary'
	}
}
