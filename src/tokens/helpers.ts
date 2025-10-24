import { DefaultTheme } from 'styled-components'

import { Color, isColorTheme, isTextColor } from '../types/Color'

export interface ColorAndTheme {
	color?: Color
	theme: DefaultTheme
}

export const getTextColor =
	(brandDefault?: boolean) =>
	({ color, theme }: ColorAndTheme): string => {
		if (!color)
			return brandDefault
				? theme.tokens.color.text.brand.primary
				: theme.tokens.color.text.primary

		if (isColorTheme(color)) {
			return theme.tokens.color.text[color].primary
		} else if (isTextColor(color)) {
			return theme.tokens.color.text[color]
		}
		return color
	}

export const getUnitlessNumber = (number: string): number =>
	Number.isInteger(number) ? parseInt(number, 10) : parseFloat(number)

export const getLineHeightUnitless = (lineHeightPercentage: string): number =>
	getUnitlessNumber(lineHeightPercentage) / 100

interface BoxShadowObj {
	x: string
	y: string
	blur: string
	spread: string
	color: string
	type: string
}

export const getBoxShadow = (shadow: BoxShadowObj | BoxShadowObj[]): string => {
	const shadowArr = Array.isArray(shadow) ? shadow : [shadow]

	return shadowArr
		.map(
			(shadow) =>
				`${shadow.type === 'innerShadow' ? 'inset' : ''} ${shadow.x} ${
					shadow.y
				} ${shadow.blur} ${shadow.spread} ${shadow.color}`
		)
		.join(', ')
}
