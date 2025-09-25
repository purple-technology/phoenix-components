import React from 'react'

import { Color } from '../../types/Color'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { isPhoenixIcon } from '../../utils/icons'
import { StyledCustomIcon, StyledIcon } from './ListStyles'

export interface ListItemIconProps {
	icon?: IconType | PhoenixIconsColored | null
	bulletColor?: Color
}

const ListItemIcon: React.FC<ListItemIconProps> = (props) => {
	if (!props.icon) {
		return null
	}

	if (isPhoenixIcon(props.icon)) {
		return <StyledIcon icon={props.icon} bulletColor={props.bulletColor} />
	}

	if (typeof props.icon === 'string') {
		return <StyledCustomIcon src={props.icon} bulletColor={props.bulletColor} />
	}

	return props.icon
}

export default ListItemIcon
