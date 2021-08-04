import React from 'react'

import { PhoenixIcons } from '../../types/PhoenixIcons'
import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { StyledIcon } from './IconStyles'

export interface IconProps extends MarginProps {
	icon: PhoenixIcons
	size?: Spacing | string | number
	className?: string
}

export const Icon: React.FC<IconProps> = ({ size = 24, ...props }) => {
	return (
		<StyledIcon
			size={size}
			src={require(`./icons/${props.icon}.svg`)}
			{...props}
		/>
	)
}
