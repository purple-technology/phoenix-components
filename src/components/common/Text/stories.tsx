import { ColorThemeValues } from '../../../types/ColorTheme'
import { TextColorValues } from '../../../types/TextColor'

export const argTypes = {
	colorTheme: {
		options: [undefined, ...ColorThemeValues]
	},
	color: {
		control: 'radio',
		options: TextColorValues,
		defaultValue: 'dark'
	}
}
