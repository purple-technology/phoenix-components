import type { DefaultTheme } from 'styled-components'

import type { CSSValue } from './CSSValue'

export const Spacing = [
	'3xs',
	'2xs',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'2xl',
	'3xl'
] as const

export type Spacing = (typeof Spacing)[number]

export const isSpacing = (size?: Spacing | CSSValue): size is Spacing => {
	return Spacing.includes(size as Spacing)
}

const DeprecatedSpacing = [
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

type DeprecatedSpacing = (typeof DeprecatedSpacing)[number]

const isDeprecatedSpacing = (
	size?: DeprecatedSpacing | CSSValue
): size is DeprecatedSpacing => {
	return DeprecatedSpacing.includes(size as DeprecatedSpacing)
}

const DeprecatedSpacingToSpacing: { [key in DeprecatedSpacing]: Spacing } = {
	xxxs: '3xs',
	xxs: '2xs',
	xs: 'xs',
	s: 'sm',
	m: 'md',
	l: 'lg',
	xl: 'xl',
	xxl: '2xl',
	xxxl: '3xl'
}

export const getSpacingCssValue = (
	theme: DefaultTheme,
	value?: Spacing | CSSValue,
	defaultValue = '0'
): string => {
	if (isSpacing(value)) {
		// Spacing size from theme file
		return theme.tokens.ref.spacing[value]
	} else if (isDeprecatedSpacing(value)) {
		// Spacing size from theme file (transformed from deprecated sizes)
		return theme.tokens.ref.spacing[DeprecatedSpacingToSpacing[value]]
	} else if (typeof value === 'number') {
		// Number type - implicitly px
		return `${value}px`
	} else if (value && new RegExp(/^\d+$/).test(value)) {
		// String type containing only integer - implicitly px
		return `${parseInt(value, 10)}px`
	} else if (value) {
		// Any other CSS string
		return value
	}
	return defaultValue
}
