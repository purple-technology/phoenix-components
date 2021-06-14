import { ButtonColorTheme } from '../../../types/ColorTheme'
import { ComponentSize } from '../../../types/ComponentSize'
import { ButtonIconAlignmentValues } from './ButtonIconAlignment'

export const argTypes = {
	children: {
		control: 'text'
	},
	disabled: {
		control: 'boolean'
	},
	size: {
		options: ComponentSize,
		defaultValue: 'medium'
	},
	colorTheme: {
		options: ButtonColorTheme,
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
