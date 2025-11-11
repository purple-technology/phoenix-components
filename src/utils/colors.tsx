import type { DefaultTheme } from 'styled-components'

import type { ColorTheme } from '../types/Color'

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

export const getWarningErrorColor = (
	theme: DefaultTheme,
	type: 'text' | 'border',
	warning?: boolean,
	error?: boolean
): string | undefined => {
	if (error) {
		return theme.tokens.color[type].error.primary
	} else if (warning) {
		return theme.tokens.color[type].warning.primary
	}
}
