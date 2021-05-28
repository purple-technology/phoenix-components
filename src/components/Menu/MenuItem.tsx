import React, {
	MouseEventHandler,
	useContext
} from 'react'

import { DropdownContext } from '../Dropdown'
import { Icon, StyledMenuItem, StyledMenuItemAnchor } from './MenuStyles'

export interface MenuItemProps {
	target?: string
	href?: string
	onClick?: MouseEventHandler<HTMLAnchorElement>
	icon?: string
}

const MenuItem: React.FC<MenuItemProps> = ({
	onClick,
	children,
	icon,
	...props
}) => {
	const value = useContext(DropdownContext)

	const thisOnClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
		/** If used inside Dropdown, hide it on click */
		value?.hide && value.hide()

		onClick && onClick(e)
	}

	return (
		<StyledMenuItem>
			<StyledMenuItemAnchor onClick={thisOnClick} {...props}>
				{icon && <Icon src={icon} />}
				{children}
			</StyledMenuItemAnchor>
		</StyledMenuItem>
	)
}

export default MenuItem
