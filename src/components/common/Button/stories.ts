import { colorThemeArray } from '../../../theme/ColorTheme'

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
		options: colorThemeArray
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
