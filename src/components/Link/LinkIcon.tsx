import React from 'react'

import { ColorTheme } from '../../types/ColorTheme'
import { IconType } from '../../types/IconType'
import { TextColor } from '../../types/TextColor'
import { isPhoenixIconOutlined } from '../../utils/icons'
import { StyledCustomIcon, StyledIcon } from './LinkStyles'

interface IconProps {
	icon?: IconType
	colorTheme?: ColorTheme
	color?: TextColor
}

const LinkIcon: React.FC<IconProps> = ({ icon, colorTheme, color }) => {
	if (!icon) {
		return null
	}

	if (isPhoenixIconOutlined(icon)) {
		return <StyledIcon icon={icon} color={color} colorTheme={colorTheme} />
	}

	if (typeof icon === 'string') {
		return <StyledCustomIcon src={icon} color={color} colorTheme={colorTheme} />
	}

	return icon
}

export default LinkIcon
