import React, { FunctionComponent, MouseEventHandler, MouseEvent } from 'react'
import { StyledMenuItem, StyledMenuItemAnchor } from './MenuStyles'

export interface MenuItemProps {
	target?: string
	href?: string
	onClick?: MouseEventHandler<HTMLAnchorElement>
}

const MenuItem: FunctionComponent<MenuItemProps> = ({
	onClick,
	children,
	...props
}) => {
	const thisOnClick: MouseEventHandler<HTMLAnchorElement> = e => {
		console.log('onClick')
		onClick && onClick(e)
	}

	return (
		<StyledMenuItem>
			<StyledMenuItemAnchor onClick={thisOnClick} {...props}>
				{children}
			</StyledMenuItemAnchor>
		</StyledMenuItem>
	)
}

export default MenuItem
