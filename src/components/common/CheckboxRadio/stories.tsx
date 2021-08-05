import { ButtonColorTheme } from '../../../types/ColorTheme'

export const argTypes = {
	size: {
		options: ['medium', 'large'],
		defaultValue: 'medium'
	},
	colorTheme: {
		options: ButtonColorTheme,
		defaultValue: 'primary'
	},
	disabled: {
		type: 'boolean'
	}
}
