import React from 'react'
import styled from 'styled-components'

import { ComponentSize } from '../../../types/ComponentSize'
import { IconAlignment } from '../../../types/IconAlignment'
import { IconType } from '../../../types/IconType'
import { PhoenixIconsOutlined } from '../../../types/PhoenixIcons'
import { StyledCustomIcon, StyledIcon, styledIconCss } from './ButtonStyles'

interface IconProps {
	icon?: IconType
	iconAlignment?: IconAlignment
	size: ComponentSize
}

const ButtonIcon: React.FC<IconProps> = (props) => {
	if (!props.icon || !props.iconAlignment) {
		return null
	}

	if (PhoenixIconsOutlined.includes(props.icon as PhoenixIconsOutlined)) {
		return (
			<StyledIcon
				icon={props.icon as PhoenixIconsOutlined}
				$iconAlignment={props.iconAlignment}
				$size={props.size}
			/>
		)
	}

	if (typeof props.icon === 'string') {
		return (
			<StyledCustomIcon
				src={props.icon}
				$iconAlignment={props.iconAlignment}
				$size={props.size}
			/>
		)
	}

	const StyledCustomElement = styled(props.icon)`
		${styledIconCss}
	`

	return (
		<StyledCustomElement
			$iconAlignment={props.iconAlignment}
			$size={props.size}
		/>
	)
}

export default ButtonIcon
