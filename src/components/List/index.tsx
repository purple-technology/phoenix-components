import { pick } from 'es-toolkit'
import React, { HTMLAttributes } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { commonPropsKeys, ListCommonProps } from './ListCommonProps'
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
