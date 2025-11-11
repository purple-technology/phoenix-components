import { pick } from 'es-toolkit'
import React, { type HTMLAttributes } from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
import { commonPropsKeys, type ListCommonProps } from './ListCommonProps'
import { StyledList } from './ListStyles'

export interface ListProps
	extends ListCommonProps,
		Omit<HTMLAttributes<HTMLUListElement>, 'color'>,
		PaddingProps,
		MarginProps,
		GenericComponentProps {}

export const List: React.FC<ListProps> = ({ children, ...props }) => {
	const commonProps: Partial<ListCommonProps> = pick(props, commonPropsKeys)

	return (
		<StyledList {...props}>
			{React.Children.map(children, (item) =>
				React.isValidElement(item)
					? React.cloneElement(item, Object.assign({}, commonProps, item.props))
					: item
			)}
		</StyledList>
	)
}
