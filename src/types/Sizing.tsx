// ---------------
// General sizing - components, text, paragraph...
// ---------------

import { CSSValue } from './CSSValue'

export const Sizing = ['xs', 'sm', 'md', 'lg'] as const
export type Sizing = typeof Sizing[number]

export const isSizing = (size?: Sizing | CSSValue): size is Sizing => {
	return Sizing.includes(size as Sizing)
}

export const SizingSmMd = ['sm', 'md'] as const
export type SizingSmMd = typeof SizingSmMd[number]

export const SizingMdLg = ['md', 'lg'] as const
export type SizingMdLg = typeof SizingMdLg[number]

export const SizingSmMdLg = ['sm', 'md', 'lg'] as const
export type SizingSmMdLg = typeof SizingSmMdLg[number]
