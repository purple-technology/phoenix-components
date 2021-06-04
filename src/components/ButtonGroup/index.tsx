import React, { ReactElement, ReactNodeArray } from 'react'

import { Divider, DividerInner, Wrapper } from './ButtonGroupStyles'

export interface ButtonGroupProps {
	dividers?: boolean
	children: JSX.Element[]
}

/**
 * Function inserts a new element between existing ones.
 * E.g. [1, 2, 3] and 9 => [1, 9, 2, 9, 3]
 */
const addDividers = (
	children: JSX.Element[],
	element: ReactElement
): ReactNodeArray =>
	children
		.map((n) => {
			if (!n.props.minimal) return [n]
			return [n, element]
		})
		.flat()
		.slice(0, -1)

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
	const children =
		props.dividers && Array.isArray(props.children)
			? addDividers(
					props.children,
					<Divider>
						<DividerInner />
					</Divider>
			  )
			: props.children

	return <Wrapper>{children}</Wrapper>
}

export default ButtonGroup
