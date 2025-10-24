import type { CSSColor } from './CSSValue'

export const ColorTheme = [
	'brand',
	'success',
	'warning',
	'error',
	'info',
	'neutral'
] as const

export type ColorTheme = (typeof ColorTheme)[number]

export const isColorTheme = (color?: Color): color is ColorTheme => {
	return ColorTheme.includes(color as ColorTheme)
}

export const TextColor = [
	'primary',
	'secondary',
	'tertiary',
	'quaternary'
] as const

export type TextColor = (typeof TextColor)[number]

export const isTextColor = (color?: Color): color is TextColor => {
	return TextColor.includes(color as TextColor)
}

export type Color = TextColor | ColorTheme | CSSColor
