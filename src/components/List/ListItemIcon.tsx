import React from 'react'

import { ColorTheme } from '../../types/ColorTheme'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { TextColor } from '../../types/TextColor'
import { isPhoenixIcon } from '../../utils/icons'
import { StyledCustomIcon, StyledIcon } from './ListStyles'

export interface ListItemIconProps {
	icon?: IconType | PhoenixIconsColored
	colorTheme?: ColorTheme
	bulletColor?: TextColor
}

const ListItemIcon: React.FC<ListItemIconProps> = (props) => {
	if (!props.icon) {
		return null
	}

	if (isPhoenixIcon(props.icon)) {
		return (
			<StyledIcon
				icon={props.icon}
				colorTheme={props.colorTheme}
				bulletColor={props.bulletColor}
			/>
		)
	}

	if (typeof props.icon === 'string') {
		return (
			<StyledCustomIcon
				src={props.icon}
				colorTheme={props.colorTheme}
				bulletColor={props.bulletColor}
			/>
		)
	}

	return props.icon
}

export default ListItemIcon
