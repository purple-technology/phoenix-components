import pick from 'lodash/pick'
import React, { HTMLAttributes } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import commonPropsKeys from './commonPropsKeys'
import { ListCommonProps } from './ListItem'
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
			{React.Children.map(children, (item) => {
				if (React.isValidElement(item)) {
					return React.cloneElement(
						item,
						Object.assign({}, commonProps, item.props)
					)
				}
				return item
			})}
		</StyledList>
	)
}
