import { ColorTheme } from '../../../types/ColorTheme'
import { ComponentSize } from '../../../types/ComponentSize'
import { IconAlignment } from '../../../types/IconAlignment'
import { PhoenixIconsOutlined } from '../../../types/PhoenixIcons'

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
		options: ColorTheme,
		defaultValue: 'primary'
	},
	iconAlignment: {
		options: IconAlignment,
		defaultValue: 'left'
	},
	icon: {
		options: PhoenixIconsOutlined
	}
}
