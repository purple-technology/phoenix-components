import { ColorTheme } from '../../../types/Color'

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
		options: ['sm', 'md', 'lg'],
		defaultValue: 'lg',
		control: 'select'
	},
	colorTheme: {
		options: [undefined, ...ColorTheme],
		defaultValue: 'brand',
		control: 'select'
	},
	disabled: {
		type: 'boolean'
	}
}
