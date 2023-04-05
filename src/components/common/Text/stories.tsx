import { ColorTheme, TextColor } from '../../../types/Color'
import { TextAlignment } from '../../../types/TextAlignment'

export const argTypes = {
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
