import { ColorTheme } from '../../../types/ColorTheme'
import { TextColor } from '../../../types/TextColor'

export const argTypes = {
	colorTheme: {
		options: [undefined, ...ColorTheme]
	},
	color: {
		control: 'radio',
		options: TextColor,
		defaultValue: 'dark'
	}
}
