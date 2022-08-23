export const ColorTheme = [
	'primary',
	'success',
	'warning',
	'error',
	'info',
	'neutral'
] as const
export type ColorTheme = typeof ColorTheme[number]
