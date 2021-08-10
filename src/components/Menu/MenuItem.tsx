import React, { MouseEventHandler } from 'react'

import { Icon, StyledMenuItem, StyledMenuItemAnchor } from './MenuStyles'

export interface MenuItemProps {
	target?: string
	href?: string
	onClick?: MouseEventHandler<HTMLAnchorElement>
	icon?: string
}

export const MenuItem: React.FC<MenuItemProps> = ({
	children,
	icon,
	...props
}) => {
	return (
		<StyledMenuItem>
			<StyledMenuItemAnchor {...props}>
				{icon && <Icon src={icon} />}
				{children}
			</StyledMenuItemAnchor>
		</StyledMenuItem>
	)
}
