import React, { MouseEventHandler } from 'react'

import { IconType } from '../../types/IconType'
import MenuItemIcon from './MenuItemIcon'
import { StyledMenuItem, StyledMenuItemAnchor } from './MenuStyles'

export interface MenuItemProps {
	className?: string
	target?: string
	href?: string
	onClick?: MouseEventHandler<HTMLAnchorElement>
	icon?: IconType
}

export const MenuItem: React.FC<MenuItemProps> = ({
	children,
	icon,
	className,
	...props
}) => {
	return (
		<StyledMenuItem className={className}>
			<StyledMenuItemAnchor {...props}>
				<MenuItemIcon icon={icon} />
				{children}
			</StyledMenuItemAnchor>
		</StyledMenuItem>
	)
}
