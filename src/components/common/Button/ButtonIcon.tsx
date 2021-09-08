import React from 'react'
import styled from 'styled-components'

import { ComponentSize } from '../../../types/ComponentSize'
import { IconType } from '../../../types/IconType'
import { PhoenixIconsOutlined } from '../../../types/PhoenixIcons'
import { StyledCustomIcon, StyledIcon, styledIconCss } from './ButtonStyles'

interface IconProps {
	icon?: IconType
	size: ComponentSize
}

const ButtonIcon: React.FC<IconProps> = (props) => {
	if (!props.icon) {
		return null
	}

	if (PhoenixIconsOutlined.includes(props.icon as PhoenixIconsOutlined)) {
		return (
			<StyledIcon
				icon={props.icon as PhoenixIconsOutlined}
				$size={props.size}
			/>
		)
	}

	if (typeof props.icon === 'string') {
		return <StyledCustomIcon src={props.icon} $size={props.size} />
	}

	const StyledCustomElement = styled(props.icon)`
		${styledIconCss}
	`

	return <StyledCustomElement $size={props.size} />
}

export default ButtonIcon
