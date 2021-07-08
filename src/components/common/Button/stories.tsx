import { ButtonColorTheme } from '../../../types/ColorTheme'
import { ComponentSize } from '../../../types/ComponentSize'
import { PhoenixIconsOutlined } from '../../../types/PhoenixIcons'
import { ButtonIconAlignment } from './ButtonIconAlignment'

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
		options: ButtonIconAlignment,
		defaultValue: 'left'
	},
	icon: {
		options: PhoenixIconsOutlined
	}
}
