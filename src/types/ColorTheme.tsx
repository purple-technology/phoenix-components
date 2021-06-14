export const ColorTheme = [
	'primary',
	'success',
	'warning',
	'error',
	'info',
	'neutral'
] as const
export type ColorTheme = typeof ColorTheme[number]

export const ButtonColorTheme = [
	'primary',
	'success',
	'error',
	'neutral'
] as const
export type ButtonColorTheme = typeof ButtonColorTheme[number]
