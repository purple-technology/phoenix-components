import React from 'react'

import { IconAlignment } from '../../types/IconAlignment'
import { IconType } from '../../types/IconType'
import { isPhoenixIconOutlined } from '../../utils/icons'
import { StyledCustomIcon, StyledIcon } from './LinkStyles'

interface IconProps {
	icon?: IconType
	iconAlignment?: IconAlignment
}

const LinkIcon: React.FC<IconProps> = (props) => {
	if (!props.icon || !props.iconAlignment) {
		return null
	}

	if (isPhoenixIconOutlined(props.icon)) {
		return <StyledIcon icon={props.icon} $iconAlignment={props.iconAlignment} />
	}

	if (typeof props.icon === 'string') {
		return (
			<StyledCustomIcon src={props.icon} $iconAlignment={props.iconAlignment} />
		)
	}

	return props.icon
}

export default LinkIcon
