import { DefaultTheme } from 'styled-components'

import { Spacing } from '../../../types/Spacing'

export const getSpacingCssValue = (
	theme: DefaultTheme,
	value?: Spacing | string | number,
	defaultValue = '0'
): string => {
	if (Spacing.includes(value as unknown as Spacing)) {
		// Spacing size from theme file
		return `${theme.$pc.spacing[value as unknown as Spacing]}px`
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
