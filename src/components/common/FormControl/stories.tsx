import { ComponentSizeSmallMediumLarge } from '../../../types/ComponentSize'

export const argTypes = {
	/** Prop error was by default JSON but we need text. */
	error: {
		control: 'text'
	},
	/** Prop error was by default boolean but we need text. */
	contentRight: {
		control: 'text'
	},
	/** Control disabled is not shown automatically because it's part of inherited props */
	disabled: {
		control: 'boolean'
	},
	size: {
		options: ComponentSizeSmallMediumLarge,
		defaultValue: 'medium'
	},
	focused: {
		table: {
			disable: true
		}
	}
}
