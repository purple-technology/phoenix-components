import { Story } from '@storybook/react'
import styled, { DefaultTheme } from 'styled-components'

import { Spacing } from '../../types/Spacing'

interface StyledCardProps {
	elevated?: boolean
	paddingTop?: Spacing | string
	paddingLeft?: Spacing | string
	paddingRight?: Spacing | string
	paddingBottom?: Spacing | string
	paddingX?: Spacing | string
	paddingY?: Spacing | string
	padding?: Spacing | string
}

/**
 * Returns correct padding in a specific direction based on values of padding for a specific direction,
 * if not defined then horizontal or vertical direction, if not defined then general padding, and if not
 * defined then zero (0).
 * @param theme
 * @param paddingSpecific Padding in a specific direction (top, left, right or bottom) - 1st priority
 * @param paddingXY Padding in horizontal or vertical direction - 2nd priority
 * @param padding General padding - 3rd priority
 * @returns string
 */
const getPadding = (
	theme: DefaultTheme,
	paddingSpecific?: Spacing | string,
	paddingXY?: Spacing | string,
	padding?: Spacing | string
): string => {
	if (paddingSpecific && Spacing.includes(paddingSpecific)) {
		return `${theme.$pc.spacing[paddingSpecific as Spacing]}px`
	} else if (paddingSpecific) {
		return paddingSpecific
	} else if (paddingXY && Spacing.includes(paddingXY)) {
		return `${theme.$pc.spacing[paddingXY as Spacing]}px`
	} else if (paddingXY) {
		return paddingXY
	} else if (padding && Spacing.includes(padding)) {
		return `${theme.$pc.spacing[padding as Spacing]}px`
	} else if (padding) {
		return padding
	}
	return '0'
}

export const StyledCard: Story = styled.div<StyledCardProps>`
	border: 1px solid;
	border-radius: ${({ theme }): string => theme.$pc.borderRadius['large']};
	${({ elevated, theme }): string => {
		const cardType = elevated ? 'elevated' : 'default'
		return `
			box-shadow: ${theme.$pc.card[cardType].boxShadow};
			border-color: ${theme.$pc.card[cardType].borderColor};
		`
	}};
	${({
		theme,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingX,
		paddingY,
		padding
	}): string => {
		const pt = getPadding(theme, paddingTop, paddingY, padding)
		const pr = getPadding(theme, paddingRight, paddingX, padding)
		const pb = getPadding(theme, paddingBottom, paddingY, padding)
		const pl = getPadding(theme, paddingLeft, paddingX, padding)
		return `padding: ${pt} ${pr} ${pb} ${pl};`
	}}
`
