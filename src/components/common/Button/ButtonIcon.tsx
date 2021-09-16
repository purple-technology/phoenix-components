import React from 'react'

import { ComponentSize } from '../../../types/ComponentSize'
import { IconType } from '../../../types/IconType'
import { isPhoenixIconOutlined } from '../../../utils/icons'
import { StyledCustomIcon, StyledIcon } from './ButtonStyles'

interface IconProps {
	icon?: IconType
	size: ComponentSize
}

const ButtonIcon: React.FC<IconProps> = (props) => {
	if (!props.icon) {
		return null
	}

	if (isPhoenixIconOutlined(props.icon)) {
		return <StyledIcon icon={props.icon} $size={props.size} />
	}

	if (typeof props.icon === 'string') {
		return <StyledCustomIcon src={props.icon} $size={props.size} />
	}

	return props.icon
}

export default ButtonIcon
