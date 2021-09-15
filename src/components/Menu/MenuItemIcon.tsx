import React from 'react'

import { IconType } from '../../types/IconType'
import { isPhoenixIconOutlined } from '../../utils/icons'
import { StyledCustomIcon, StyledIcon } from './MenuStyles'

interface IconProps {
	icon?: IconType
}

const MenuItemIcon: React.FC<IconProps> = (props) => {
	if (!props.icon) {
		return null
	}

	if (isPhoenixIconOutlined(props.icon)) {
		return <StyledIcon icon={props.icon} />
	}

	if (typeof props.icon === 'string') {
		return <StyledCustomIcon src={props.icon} />
	}

	return props.icon
}

export default MenuItemIcon
