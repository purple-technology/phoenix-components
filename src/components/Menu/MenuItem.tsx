import React, { MouseEventHandler } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/ColorTheme'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import MenuItemIcon from './MenuItemIcon'
import { StyledMenuItem, StyledMenuItemAnchor } from './MenuStyles'

export interface MenuItemProps
	extends MarginProps,
		PaddingProps,
		GenericComponentProps {
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
		<StyledMenuItem data-testid={testId} className={className} {...props}>
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
