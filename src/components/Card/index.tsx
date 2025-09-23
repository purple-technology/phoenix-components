import React, { PropsWithChildren } from 'react'

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

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
	testId = 'Card',
	onClick,
	elevated,
	disabled,
	...props
}) => {
	return (
		<StyledCard
			data-testid={testId}
			$onClick={onClick}
			$elevated={elevated}
			$disabled={disabled}
			{...props}
		/>
	)
}
