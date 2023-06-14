import { ColorTheme } from '../../../types/Color'
import { IconAlignment } from '../../../types/IconAlignment'
import { PhoenixIconsOutlined } from '../../../types/PhoenixIcons'
import { Sizing } from '../../../types/Sizing'

export const argTypes = {
	children: {
		control: 'text'
	},
	size: {
		control: 'select',
		options: Sizing
	},
	test: {
		control: 'select',
		options: ['test', 'test2']
	},
	colorTheme: {
		control: 'select',
		options: ColorTheme
	},
	iconAlignment: {
		control: 'radio',
		options: IconAlignment
	},
	icon: {
		control: 'select',
		options: [undefined, ...PhoenixIconsOutlined]
	}
}
