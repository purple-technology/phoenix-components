import type React from 'react'
import type { HTMLAttributes } from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { ListCommonProps } from './ListCommonProps'
import ListItemIcon from './ListItemIcon'
import { StyledListItem } from './ListStyles'

export interface ListItemProps
	extends ListCommonProps,
		Omit<HTMLAttributes<HTMLLIElement>, 'size' | 'color'>,
		MarginProps,
		GenericComponentProps {}

export const ListItem: React.FC<ListItemProps> = ({
	size = 'sm',
	color = 'primary',
	bulletColor = 'tertiary',
	mb = '2xs',
	icon = 'bullet-point',
	children,
	...props
}) => {
	return (
		<StyledListItem size={size} color={color} mb={mb} {...props}>
			<ListItemIcon icon={icon} bulletColor={bulletColor} />
			{children}
		</StyledListItem>
	)
}
