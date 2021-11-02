import React from 'react'

import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { isPhoenixIcon } from '../../utils/icons'
import { StyledCustomIcon, StyledIcon } from './MenuStyles'

interface IconProps {
	icon?: IconType | PhoenixIconsColored
}

const MenuItemIcon: React.FC<IconProps> = (props) => {
	if (!props.icon) {
		return null
	}

	if (isPhoenixIcon(props.icon)) {
		return <StyledIcon icon={props.icon} />
	}

	if (typeof props.icon === 'string') {
		return <StyledCustomIcon src={props.icon} />
	}

	return props.icon
}

export default MenuItemIcon
