import { ColorTheme } from '../../../types/Color'
import { SizingSmMdLg } from '../../../types/Sizing'

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
		options: SizingSmMdLg,
		control: 'radio'
	},
	colorTheme: {
		options: [undefined, ...ColorTheme],
		control: 'select'
	},
	disabled: {
		type: 'boolean'
	}
}
