import type React from 'react'
import type { PropsWithChildren } from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
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
	...props
}) => {
	return <StyledCard data-testid={testId} {...props} />
}
