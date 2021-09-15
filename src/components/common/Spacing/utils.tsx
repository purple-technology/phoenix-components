import { DefaultTheme } from 'styled-components'

import { Spacing } from '../../../types/Spacing'

export const isSpacing = (
	size?: Spacing | string | number
): size is Spacing => {
	return Spacing.includes(size as Spacing)
}

export const getSpacingCssValue = (
	theme: DefaultTheme,
	value?: Spacing | string | number,
	defaultValue = '0'
): string => {
	if (isSpacing(value)) {
		// Spacing size from theme file
		return `${theme.$pc.spacing[value]}px`
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
