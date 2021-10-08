import React, { ReactElement, ReactNodeArray } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Divider, DividerInner, Wrapper } from './ButtonGroupStyles'

export interface ButtonGroupProps extends GenericComponentProps {
	children: JSX.Element[]
	dividers?: boolean
	className?: string
}

/**
 * Function inserts a new element between existing ones.
 * E.g. [1, 2, 3] and 9 => [1, 9, 2, 9, 3]
 */
const addDividers = (
	children: JSX.Element[],
	element: ReactElement
): ReactNodeArray =>
	React.Children.map(children, (n) => {
		if (!n.props.minimal) return [n]
		return [n, element]
	})
		.flat()
		.slice(0, -1)

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
	testId = 'ButtonGroup',
	children: justChildren,
	dividers,
	...props
}) => {
	const children =
		dividers && Array.isArray(justChildren)
			? addDividers(
					justChildren,
					<Divider>
						<DividerInner />
					</Divider>
			  )
			: justChildren

	return (
		<Wrapper {...props} data-testid={testId}>
			{children}
		</Wrapper>
	)
}
