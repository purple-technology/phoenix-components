import { ColorThemeValues } from '../../../enum/ColorTheme'
import { TextColorValues } from '../../../enum/TextColor'

export const argTypes = {
	colorTheme: {
		options: [undefined, ...ColorThemeValues]
	},
	color: {
		control: 'radio',
		options: TextColorValues
	}
}
