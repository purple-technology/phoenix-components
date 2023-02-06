import { ColorTheme, TextColor } from '../../../types/Color'
import { TextAlignment } from '../../../types/TextAlignment'

export const argTypes = {
	colorTheme: {
		options: [undefined, ...ColorTheme]
	},
	color: {
		control: 'radio',
		options: [...TextColor, ...ColorTheme],
		defaultValue: 'primary'
	},
	textAlign: {
		control: 'radio',
		options: [undefined, ...TextAlignment]
	}
}
