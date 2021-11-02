import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledCard } from './CardStyles'

export interface CardProps
	extends PaddingProps,
		MarginProps,
		GenericComponentProps {
	elevated?: boolean
	disabled?: boolean
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Card: React.FC<CardProps> = ({ testId = 'Card', ...props }) => {
	return <StyledCard data-testid={testId} {...props} />
}
