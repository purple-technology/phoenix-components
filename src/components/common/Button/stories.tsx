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
		options: Sizing,
		description:
			'Size of the button; affects padding, line-height, and font-size'
	},
	test: {
		control: 'select',
		options: ['test', 'test2']
	},
	colorTheme: {
		control: 'select',
		options: ColorTheme,
		description: 'Color theme of the button'
	},
	iconAlignment: {
		control: 'select',
		options: IconAlignment
	},
	icon: {
		control: 'select',
		options: [undefined, ...PhoenixIconsOutlined]
	},
	secondary: {
		control: 'boolean',
		description: 'Secondary style button'
	},
	outline: {
		control: 'boolean',
		description: 'Outline style button'
	},
	minimal: {
		control: 'boolean',
		description: 'Minimal styling of the button - no background, border etc.'
	}
}
