import React, { MouseEventHandler } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/ColorTheme'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import MenuItemIcon from './MenuItemIcon'
import { StyledMenuItem, StyledMenuItemAnchor } from './MenuStyles'

export interface MenuItemProps extends GenericComponentProps {
	target?: string
	href?: string
	onClick?: MouseEventHandler<HTMLAnchorElement>
	icon?: IconType | PhoenixIconsColored
	colorTheme?: ColorTheme
	disabled?: boolean
}

export const MenuItem: React.FC<MenuItemProps> = ({
	testId = 'MenuItem',
	onClick,
	children,
	icon,
	className,
	...props
}) => {
	return (
		<StyledMenuItem data-testid={testId} className={className}>
			<StyledMenuItemAnchor
				onClick={!props.disabled ? onClick : undefined}
				{...props}
			>
				<MenuItemIcon
					icon={icon}
					disabled={props.disabled}
					colorTheme={props.colorTheme}
				/>
				{children}
			</StyledMenuItemAnchor>
		</StyledMenuItem>
	)
}
