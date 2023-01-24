import { DefaultTheme } from 'styled-components'

import { Color, isColorTheme, isTextColor } from '../types/Color'

export interface ColorAndTheme {
	$color?: Color
	theme: DefaultTheme
}

export const getTextColor =
	(brandDefault?: boolean) =>
	({ $color, theme }: ColorAndTheme): string => {
		if (!$color)
			return brandDefault
				? theme.tokens.color.text.brand.primary
				: theme.tokens.color.text.primary

		if (isColorTheme($color)) {
			return theme.tokens.color.text[$color].primary
		} else if (isTextColor($color)) {
			return theme.tokens.color.text[$color]
		}
		return $color
	}

export const getLineHeightUnitless = (lineHeightPercentage: string): number =>
	parseInt(lineHeightPercentage, 10) / 100
