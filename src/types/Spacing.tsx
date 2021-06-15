export const Spacing = [
	'xxxs',
	'xxs',
	'xs',
	's',
	'm',
	'l',
	'xl',
	'xxl',
	'xxxl'
] as const

export type Spacing = typeof Spacing[number]
