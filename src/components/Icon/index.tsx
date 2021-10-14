import React, { forwardRef } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/ColorTheme'
import { PhoenixIcons, PhoenixIconsSrc } from '../../types/PhoenixIcons'
import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { StyledIcon, StyledIconContainer } from './IconStyles'

export interface IconProps extends MarginProps, GenericComponentProps {
	icon: PhoenixIcons
	size?: Spacing | string | number
	className?: string
	colorTheme?: ColorTheme
	light?: boolean
}

/**
 * `colorTheme` prop is NOT supported with icons that already contain colorTheme suffix in their icon name, e.g. "calendar**-primary**", "exclamation**-warning**", "trash**-error**", etc. However, you can use `colorTheme` prop with their outlined variants, such as "calendar", "exclamation", "trash" etc.
 */
export const Icon: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<IconProps> & React.RefAttributes<HTMLSpanElement>
> = forwardRef<HTMLSpanElement, IconProps>(function Icon(
	{ size = 24, testId = 'Icon', ...props },
	ref
) {
	return (
		<StyledIconContainer $size={size} ref={ref} data-testid={testId} {...props}>
			<StyledIcon src={PhoenixIconsSrc[props.icon]} />
		</StyledIconContainer>
	)
})
