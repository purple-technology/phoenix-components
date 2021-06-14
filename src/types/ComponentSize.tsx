export const ComponentSize = ['tiny', 'small', 'medium', 'large'] as const
export type ComponentSize = typeof ComponentSize[number]

export const ComponentSizeMediumLarge = ['medium', 'large'] as const
export type ComponentSizeMediumLarge = typeof ComponentSizeMediumLarge[number]

export const ComponentSizeSmallMediumLarge = [
	'small',
	'medium',
	'large'
] as const
export type ComponentSizeSmallMediumLarge =
	typeof ComponentSizeSmallMediumLarge[number]
