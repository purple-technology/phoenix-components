// ---------------
// General sizing - components, text, paragraph...
// ---------------

import { CSSValue } from './CSSValue'

export const Sizing = ['xs', 'sm', 'md', 'lg'] as const
export type Sizing = typeof Sizing[number]

export const isSizing = (size?: Sizing | CSSValue): size is Sizing => {
	return Sizing.includes(size as Sizing)
}

// ---------------
// Heading sizing
// ---------------

export enum HeadingSizingEnum {
	_xl = 'xl',
	_2xl = '2xl',
	_3xl = '3xl',
	_4xl = '4xl'
}

export const HeadingSizing = ['xl', '2xl', '3xl', '4xl'] as const
export type HeadingSizing = typeof HeadingSizing[number]

export const SizingSmMd = ['sm', 'md'] as const
export type SizingSmMd = typeof SizingSmMd[number]

export const SizingMdLg = ['md', 'lg'] as const
export type SizingMdLg = typeof SizingMdLg[number]

export const SizingSmMdLg = ['sm', 'md', 'lg'] as const
export type SizingSmMdLg = typeof SizingSmMdLg[number]
