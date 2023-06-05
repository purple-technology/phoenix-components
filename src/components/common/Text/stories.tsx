import { ColorTheme, TextColor } from '../../../types/Color'
import { TextAlignment } from '../../../types/TextAlignment'

export const argTypes = {
	color: {
		control: 'select',
		options: [...TextColor, ...ColorTheme]
	},
	textAlign: {
		control: 'select',
		options: [undefined, ...TextAlignment]
	}
}
