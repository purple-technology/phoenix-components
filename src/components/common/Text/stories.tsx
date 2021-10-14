import { ColorTheme } from '../../../types/ColorTheme'
import { TextAlignment } from '../../../types/TextAlignment'
import { TextColor } from '../../../types/TextColor'

export const argTypes = {
	colorTheme: {
		options: [undefined, ...ColorTheme]
	},
	color: {
		control: 'radio',
		options: TextColor,
		defaultValue: 'dark'
	},
	textAlign: {
		control: 'radio',
		options: [undefined, ...TextAlignment]
	}
}
