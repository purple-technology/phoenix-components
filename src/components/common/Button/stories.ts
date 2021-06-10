import { ButtonColorThemeValues, ColorTheme } from '../../../enum/ColorTheme'
import { ComponentSize, ComponentSizeValues } from '../../../enum/ComponentSize'
import {
	ButtonIconAlignment,
	ButtonIconAlignmentValues
} from './ButtonIconAlignment'

export const argTypes = {
	children: {
		control: 'text'
	},
	disabled: {
		control: 'boolean'
	},
	size: {
		options: ComponentSizeValues,
		defaultValue: ComponentSize.MEDIUM
	},
	colorTheme: {
		options: ButtonColorThemeValues,
		defaultValue: ColorTheme.PRIMARY
	},
	iconAlignment: {
		options: ButtonIconAlignmentValues,
		defaultValue: ButtonIconAlignment.LEFT
	},
	icon: {
		table: {
			disable: true
		}
	}
}
