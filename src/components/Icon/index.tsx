import type React from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { Color, ColorTheme } from '../../types/Color'
import type { CSSValue } from '../../types/CSSValue'
import { type PhoenixIcons, PhoenixIconsSrc } from '../../types/PhoenixIcons'
import type { Sizing } from '../../types/Sizing'
import type { MarginProps } from '../common/Spacing/MarginProps'
import { StyledIcon, StyledIconContainer } from './IconStyles'

export interface IconProps extends MarginProps, GenericComponentProps {
	disabled?: boolean
	colorTheme?: ColorTheme
	icon: PhoenixIcons
	size?: Sizing | CSSValue
	color?: Color
	ref?: React.Ref<HTMLSpanElement>
}

/**
 * `colorTheme` prop is NOT supported with icons that already contain colorTheme suffix in their icon name, e.g. "calendar**-primary**", "exclamation**-warning**", "trash**-error**", etc. However, you can use `colorTheme` prop with their outlined variants, such as "calendar", "exclamation", "trash" etc.
 */
export const Icon: React.FC<IconProps> = ({
	size = 24,
	testId = 'Icon',
	color,
	ref,
	...props
}) => {
	return (
		<StyledIconContainer
			size={size}
			color={color}
			ref={ref}
			data-testid={testId}
			{...props}
		>
			<StyledIcon src={PhoenixIconsSrc[props.icon]} />
		</StyledIconContainer>
	)
}
