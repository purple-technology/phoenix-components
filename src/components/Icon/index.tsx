import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Color } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { PhoenixIcons, PhoenixIconsSrc } from '../../types/PhoenixIcons'
import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { StyledIcon, StyledIconContainer } from './IconStyles'

export interface IconProps extends MarginProps, GenericComponentProps {
	icon: PhoenixIcons
	size?: Spacing | CSSValue
	color?: Color
	/** Reference to the icon element */
	ref?: React.Ref<HTMLSpanElement>
}

/**
 * `colorTheme` prop is NOT supported with icons that already contain colorTheme suffix in their icon name, e.g. "calendar**-primary**", "exclamation**-warning**", "trash**-error**", etc. However, you can use `colorTheme` prop with their outlined variants, such as "calendar", "exclamation", "trash" etc.
 */
export function Icon({
	size = 24,
	testId = 'Icon',
	color,
	ref,
	...props
}: IconProps): React.JSX.Element {
	return (
		<StyledIconContainer
			$size={size}
			$color={color}
			ref={ref}
			data-testid={testId}
			{...props}
		>
			<StyledIcon src={PhoenixIconsSrc[props.icon]} />
		</StyledIconContainer>
	)
}
