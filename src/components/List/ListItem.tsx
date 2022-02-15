import React, { HTMLAttributes } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/ColorTheme'
import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { TextColor } from '../../types/TextColor'
import { MarginProps } from '../common/Spacing/MarginProps'
import ListItemIcon from './ListItemIcon'
import { StyledListItem } from './ListStyles'

export interface ListCommonProps {
	size?: ComponentSizeSmallMediumLarge | string | number
	color?: TextColor
	icon?: IconType | PhoenixIconsColored | null
	colorTheme?: ColorTheme
	bulletColor?: TextColor
}

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
