import type React from 'react'

import type { Color } from '../../types/Color'
import type { IconType } from '../../types/IconType'
import { isPhoenixIconOutlined } from '../../utils/icons'
import { StyledCustomIcon, StyledIcon } from './LinkStyles'

interface IconProps {
	icon?: IconType
	color?: Color
}

const LinkIcon: React.FC<IconProps> = ({ icon, color }) => {
	if (!icon) {
		return null
	}

	if (isPhoenixIconOutlined(icon)) {
		return <StyledIcon icon={icon} color={color} />
	}

	if (typeof icon === 'string') {
		return <StyledCustomIcon src={icon} color={color} />
	}

	return icon
}

export default LinkIcon
