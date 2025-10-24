import type React from 'react'

import type { ColorTheme } from '../../types/Color'
import type { IconType } from '../../types/IconType'
import type { PhoenixIconsColored } from '../../types/PhoenixIcons'
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
