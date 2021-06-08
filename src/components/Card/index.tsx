import React from 'react'

import { Spacing } from '../../enum/Spacing'
import { StyledCard } from './CardStyles'

export interface CardProps {
	elevated?: boolean
	/** Left padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than paddingX. */
	paddingLeft?: Spacing | string
	/** Right padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than paddingX. */
	paddingRight?: Spacing | string
	/** Top padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than paddingY. */
	paddingTop?: Spacing | string
	/** Bottom padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than paddingY. */
	paddingBottom?: Spacing | string
	/** Horizontal padding (shortcut for paddingLeft and paddingRight) either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	paddingX?: Spacing | string
	/** Vertical padding (shortcut for paddingTop and paddingBottom) either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	paddingY?: Spacing | string
	/** Padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). Least specific padding prop. */
	padding?: Spacing | string
}

const Card: React.FC<CardProps> = ({
	// paddingTop = 0,
	// paddingBottom = 0,
	// paddingLeft = 0,
	// paddingRight = 0,
	// paddingX = 0,
	// paddingY = 0,
	...props
}) => {
	return (
		<StyledCard
			// paddingTop={paddingTop}
			// paddingBottom={paddingBottom}
			// paddingLeft={paddingLeft}
			// paddingRight={paddingRight}
			// paddingX={paddingX}
			// paddingY={paddingY}
			{...props}
		/>
	)
}

export default Card
