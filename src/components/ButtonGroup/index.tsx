import React, { ReactElement, ReactNodeArray } from 'react'

import { Divider, Wrapper } from './ButtonGroupStyles'

export interface ButtonGroupProps {
	dividers?: boolean
}

/**
 * Function inserts a new element between existing ones.
 * E.g. [1, 2, 3] and 9 => [1, 9, 2, 9, 3]
 */
export const addDividers = (
	children: ReactNodeArray,
	element: ReactElement
): ReactNodeArray =>
	// TODO: typing
	[]
		.concat(
			...children.map((n: ReactElement) => {
				if (!n.props.minimal) return [n]
				return [n, element]
			})
		)
		.slice(0, -1)

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
	const children =
		props.dividers && Array.isArray(props.children)
			? addDividers(props.children, <Divider />)
			: props.children

	return <Wrapper>{children}</Wrapper>
}

export default ButtonGroup
