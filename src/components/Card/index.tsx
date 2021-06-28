import React from 'react'

import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledCard } from './CardStyles'

export interface CardProps extends PaddingProps, MarginProps {
	elevated?: boolean
	disabled?: boolean
	onClick?: () => void
}

export const Card: React.FC<CardProps> = (props) => {
	return <StyledCard {...props} />
}
