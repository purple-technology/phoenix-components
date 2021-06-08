import { Story } from '@storybook/react'
import styled, { DefaultTheme } from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'
import { Spacing, SpacingValues } from '../../enum/Spacing'

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
	if (paddingSpecific && SpacingValues.includes(paddingSpecific)) {
		return `${theme.spacing[paddingSpecific as Spacing]}px`
	} else if (paddingSpecific) {
		return paddingSpecific
	} else if (paddingXY && SpacingValues.includes(paddingXY)) {
		return `${theme.spacing[paddingXY as Spacing]}px`
	} else if (paddingXY) {
		return paddingXY
	} else if (padding && SpacingValues.includes(padding)) {
		return `${theme.spacing[padding as Spacing]}px`
	} else if (padding) {
		return padding
	}
	return '0'
}

export const StyledCard: Story = styled.div<StyledCardProps>`
	border: 1px solid;
	border-radius: ${({ theme }): string =>
		theme.borderRadius[ComponentSize.LARGE]};
	${({ elevated, theme }): string => {
		const cardType = elevated ? 'elevated' : 'default'
		return `
			box-shadow: ${theme.card[cardType].boxShadow};
			border-color: ${theme.card[cardType].borderColor};
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
