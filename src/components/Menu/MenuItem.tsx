import React, { MouseEventHandler } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { IconType } from '../../types/IconType'
import MenuItemIcon from './MenuItemIcon'
import { StyledMenuItem, StyledMenuItemAnchor } from './MenuStyles'

export interface MenuItemProps extends GenericComponentProps {
	className?: string
	target?: string
	href?: string
	onClick?: MouseEventHandler<HTMLAnchorElement>
	icon?: IconType
}

export const MenuItem: React.FC<MenuItemProps> = ({
	testId = 'MenuItem',
	children,
	icon,
	className,
	...props
}) => {
	return (
		<StyledMenuItem data-testid={testId} className={className}>
			<StyledMenuItemAnchor {...props}>
				<MenuItemIcon icon={icon} />
				{children}
			</StyledMenuItemAnchor>
		</StyledMenuItem>
	)
}
