import React, { HTMLAttributes } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { ListCommonProps } from './ListCommonProps'
import ListItemIcon from './ListItemIcon'
import { StyledListItem } from './ListStyles'

export interface ListItemProps
	extends ListCommonProps,
		Omit<HTMLAttributes<HTMLLIElement>, 'size' | 'color'>,
		MarginProps,
		GenericComponentProps {}

export const ListItem: React.FC<ListItemProps> = ({
	size = 'medium',
	color = 'darkest',
	bulletColor = 'light',
	mb = 'xxs',
	icon = 'bullet-point',
	colorTheme,
	children,
	...props
}) => {
	return (
		<StyledListItem $size={size} $color={color} mb={mb} {...props}>
			<ListItemIcon
				icon={icon}
				bulletColor={bulletColor}
				colorTheme={colorTheme}
			/>
			{children}
		</StyledListItem>
	)
}
