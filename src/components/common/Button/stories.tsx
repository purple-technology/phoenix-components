import { ColorTheme } from '../../../types/Color'
import { IconAlignment } from '../../../types/IconAlignment'
import { PhoenixIconsOutlined } from '../../../types/PhoenixIcons'
import { Sizing } from '../../../types/Sizing'

export const argTypes = {
	children: {
		control: 'text'
	},
	disabled: {
		control: 'boolean'
	},
	size: {
		options: Sizing,
		defaultValue: 'md'
	},
	colorTheme: {
		options: ColorTheme,
		defaultValue: 'brand'
	},
	iconAlignment: {
		options: IconAlignment,
		defaultValue: 'left'
	},
	icon: {
		options: PhoenixIconsOutlined
	}
}
