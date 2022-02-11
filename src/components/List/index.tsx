import { intersection, pick } from 'lodash'
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
	const commonProps: Partial<ListCommonProps> = pick(
		props,
		commonPropsKeys.filter((key) => typeof props[key] !== 'undefined')
	)

	return (
		<StyledList {...props}>
			{React.Children.map(children, (item) => {
				if (
					React.isValidElement(item) &&
					intersection(Object.keys(item.props), commonPropsKeys).length === 0
				) {
					// Pass common props only if they are not already defined on the child
					return React.cloneElement(item, commonProps)
				}
				return item
			})}
		</StyledList>
	)
}
