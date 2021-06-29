import React from 'react'
import styled from 'styled-components'

import { ComponentSize } from '../../../types/ComponentSize'
import { ButtonIconAlignment } from './ButtonIconAlignment'
import { StyledIcon, styledIconCss } from './ButtonStyles'

export type IconType = string | React.FC

interface IconProps {
	icon?: IconType
	iconAlignment?: ButtonIconAlignment
	size: ComponentSize
}

const ButtonIcon: React.FC<IconProps> = (props) => {
	if (!props.icon || !props.iconAlignment) {
		return null
	}

	if (typeof props.icon === 'string') {
		return (
			<StyledIcon
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
