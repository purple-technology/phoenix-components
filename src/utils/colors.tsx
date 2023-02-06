import { DefaultTheme } from 'styled-components'

import { ColorTheme } from '../types/Color'

export const getColorBasedOnColorThemeAndLightness = (
	theme: DefaultTheme,
	colorTheme?: ColorTheme,
	secondary?: boolean
): string => {
	if (!colorTheme) {
		return secondary
			? theme.tokens.color.text.inverse
			: theme.tokens.color.text.primary
	}
	return theme.tokens.color.background[colorTheme][
		secondary ? 'secondary' : 'primary'
	]
}
