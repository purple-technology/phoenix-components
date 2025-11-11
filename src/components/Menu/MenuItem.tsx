import type React from 'react'
import type { MouseEventHandler, PropsWithChildren } from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { ColorTheme } from '../../types/Color'
import type { IconType } from '../../types/IconType'
import type { PhoenixIconsColored } from '../../types/PhoenixIcons'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
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
