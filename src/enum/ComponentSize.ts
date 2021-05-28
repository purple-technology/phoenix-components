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
