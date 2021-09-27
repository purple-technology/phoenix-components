export const TextColor = [
	'darkest',
	'dark',
	'light',
	'lightest',
	'white'
] as const

export type TextColor = typeof TextColor[number]
