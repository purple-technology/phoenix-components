import React from 'react'
import styled from 'styled-components'

import { ComponentSize } from '../../../types/ComponentSize'
import { PhoenixIconsOutlined } from '../../../types/PhoenixIcons'
import { ButtonIconAlignment } from './ButtonIconAlignment'
import { StyledCustomIcon, StyledIcon, styledIconCss } from './ButtonStyles'

export type IconType = PhoenixIconsOutlined | React.FC | string

interface IconProps {
	icon?: IconType
	iconAlignment?: ButtonIconAlignment
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
