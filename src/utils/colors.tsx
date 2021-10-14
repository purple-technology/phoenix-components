import { DefaultTheme } from 'styled-components'

import { ColorTheme } from '../types/ColorTheme'

export const getColorBasedOnColorThemeAndLightness = (
	theme: DefaultTheme,
	colorTheme?: ColorTheme,
	light?: boolean
): string => {
	if (!colorTheme) {
		return light ? theme.$pc.colors.gray._0 : theme.$pc.colors.gray._90
	}
	return theme.$pc.colors[colorTheme][light ? 'light' : 'dark']
}
