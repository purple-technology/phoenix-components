import React, { MouseEventHandler, PropsWithChildren } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/Color'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import MenuItemIcon from './MenuItemIcon'
import {
	StyledMenuItem,
	StyledMenuItemAnchor,
	StyledMenuItemButton
} from './MenuStyles'

export interface MenuItemProps
	extends MarginProps,
		PaddingProps,
		GenericComponentProps {
	target?: string
	href?: string
	onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
	icon?: IconType | PhoenixIconsColored
	colorTheme?: ColorTheme
	disabled?: boolean
}

export const MenuItem: React.FC<PropsWithChildren<MenuItemProps>> = ({
	testId = 'MenuItem',
	onClick,
	children,
	icon,
	href,
	disabled,
	className,
	colorTheme,
	...restProps
}) => {
	const getClickHandler = ():
		| MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
		| undefined => (disabled ? undefined : onClick)

	const commonProps = {
		onClick: getClickHandler(),
		disabled,
		...restProps
	}

	const content = (
		<>
			<MenuItemIcon icon={icon} disabled={disabled} colorTheme={colorTheme} />
			{children}
		</>
	)

	return (
		<StyledMenuItem data-testid={testId} className={className} {...restProps}>
			{href ? (
				<StyledMenuItemAnchor href={href} {...commonProps}>
					{content}
				</StyledMenuItemAnchor>
			) : (
				<StyledMenuItemButton {...commonProps}>{content}</StyledMenuItemButton>
			)}
		</StyledMenuItem>
	)
}
