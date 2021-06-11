import { ButtonColorThemeValues } from '../../../types/ColorTheme'
import { ComponentSizeValues } from '../../../types/ComponentSize'
import { ButtonIconAlignmentValues } from './ButtonIconAlignment'

export const argTypes = {
	children: {
		control: 'text'
	},
	disabled: {
		control: 'boolean'
	},
	size: {
		options: ComponentSizeValues,
		defaultValue: 'medium'
	},
	colorTheme: {
		options: ButtonColorThemeValues,
		defaultValue: 'primary'
	},
	iconAlignment: {
		options: ButtonIconAlignmentValues,
		defaultValue: 'left'
	},
	icon: {
		table: {
			disable: true
		}
	}
}
