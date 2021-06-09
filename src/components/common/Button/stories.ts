import { ButtonColorThemeValues } from '../../../enum/ColorTheme'

export const argTypes = {
	children: {
		control: 'text'
	},
	disabled: {
		control: 'boolean'
	},
	size: {
		options: ['tiny', 'small', 'medium', 'large']
	},
	colorTheme: {
		options: ButtonColorThemeValues
	},
	iconAlignment: {
		options: ['left', 'right']
	},
	icon: {
		table: {
			disable: true
		}
	}
}
