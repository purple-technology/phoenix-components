export enum ComponentSize {
	TINY = 'tiny',
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large'
}

export type ComponentSizeMediumLarge = Exclude<
	ComponentSize,
	ComponentSize.TINY | ComponentSize.SMALL
>

export type ComponentSizeSmallMediumLarge = Exclude<
	ComponentSize,
	ComponentSize.TINY
>

export const ComponentSizeValues: string[] = [
	ComponentSize.TINY,
	ComponentSize.SMALL,
	ComponentSize.MEDIUM,
	ComponentSize.LARGE
]

export const ComponentSizeSmallMediumLargeValues: string[] = [
	ComponentSize.SMALL,
	ComponentSize.MEDIUM,
	ComponentSize.LARGE
]
