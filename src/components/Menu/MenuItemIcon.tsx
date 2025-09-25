import React from 'react'

import { ColorTheme } from '../../types/Color'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { isPhoenixIcon } from '../../utils/icons'
import { StyledCustomIcon, StyledIcon } from './MenuStyles'

export interface MenuItemIconProps {
	icon?: IconType | PhoenixIconsColored
	disabled?: boolean
	colorTheme?: ColorTheme
}

const MenuItemIcon: React.FC<MenuItemIconProps> = (props) => {
	if (!props.icon) {
		return null
	}

	if (isPhoenixIcon(props.icon)) {
		return (
			<StyledIcon
				icon={props.icon}
				disabled={props.disabled}
				colorTheme={props.colorTheme}
			/>
		)
	}

	if (typeof props.icon === 'string') {
		return (
			<StyledCustomIcon
				src={props.icon}
				disabled={props.disabled}
				colorTheme={props.colorTheme}
			/>
		)
	}

	return props.icon
}

export default MenuItemIcon
