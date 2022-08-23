import { ColorTheme } from '../../../types/ColorTheme'

export const argTypes = {
	/** Prop error was by default JSON but we need text. */
	error: {
		control: 'text'
	},
	/** Prop warning was by default JSON but we need text. */
	warning: {
		control: 'text'
	},
	label: {
		control: 'text'
	},
	size: {
		options: ['medium', 'large'],
		defaultValue: 'medium'
	},
	colorTheme: {
		options: ColorTheme,
		defaultValue: 'primary'
	},
	disabled: {
		type: 'boolean'
	}
}
