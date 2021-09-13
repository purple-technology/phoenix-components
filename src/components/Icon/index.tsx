import React, { forwardRef } from 'react'

import { PhoenixIcons, PhoenixIconsSrc } from '../../types/PhoenixIcons'
import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { StyledIcon, StyledIconContainer } from './IconStyles'

export interface IconProps extends MarginProps {
	icon: PhoenixIcons
	size?: Spacing | string | number
	className?: string
}

export const Icon: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<IconProps> & React.RefAttributes<HTMLSpanElement>
> = forwardRef<HTMLSpanElement, IconProps>(function Icon(
	{ size = 24, ...props },
	ref
) {
	return (
		<StyledIconContainer $size={size} ref={ref} {...props}>
			<StyledIcon $size={size} src={PhoenixIconsSrc[props.icon]} />
		</StyledIconContainer>
	)
})
