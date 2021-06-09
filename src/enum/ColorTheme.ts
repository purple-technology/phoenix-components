export enum ColorTheme {
	PRIMARY = 'primary',
	SUCCESS = 'success',
	WARNING = 'warning',
	ERROR = 'error',
	INFO = 'info',
	NEUTRAL = 'neutral'
}

export type ButtonColorTheme = Exclude<
	ColorTheme,
	ColorTheme.WARNING | ColorTheme.INFO
>

export const ColorThemeValues = [
	ColorTheme.PRIMARY,
	ColorTheme.SUCCESS,
	ColorTheme.WARNING,
	ColorTheme.ERROR,
	ColorTheme.INFO,
	ColorTheme.NEUTRAL
]

export const ButtonColorThemeValues = [
	ColorTheme.PRIMARY,
	ColorTheme.SUCCESS,
	ColorTheme.ERROR,
	ColorTheme.NEUTRAL
]
