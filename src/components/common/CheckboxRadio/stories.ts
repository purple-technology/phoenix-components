import { ColorTheme, ColorThemeValues } from '../../../enum/ColorTheme'
import { ComponentSize } from '../../../enum/ComponentSize'

export const argTypes = {
	size: {
		options: ['medium', 'large'],
		defaultValue: ComponentSize.MEDIUM
	},
	colorTheme: {
		options: ColorThemeValues,
		defaultValue: ColorTheme.PRIMARY
	}
}
