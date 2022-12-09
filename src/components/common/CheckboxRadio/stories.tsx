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
	colorTheme: {
		options: [undefined, ...ColorTheme],
		defaultValue: 'brand'
	},
	disabled: {
		type: 'boolean'
	}
}
