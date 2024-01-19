import React, { forwardRef, Suspense } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Color } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { PhoenixIcons, PhoenixIconsSrc } from '../../types/PhoenixIcons'
import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { StyledIconContainer } from './IconStyles'

export interface IconProps extends MarginProps, GenericComponentProps {
	icon: PhoenixIcons
	size?: Spacing | CSSValue
	color?: Color
}

/**
 * `colorTheme` prop is NOT supported with icons that already contain colorTheme suffix in their icon name, e.g. "calendar**-primary**", "exclamation**-warning**", "trash**-error**", etc. However, you can use `colorTheme` prop with their outlined variants, such as "calendar", "exclamation", "trash" etc.
 */
export const Icon: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<IconProps> & React.RefAttributes<HTMLSpanElement>
> = forwardRef<HTMLSpanElement, IconProps>(function Icon(
	{ size = 24, testId = 'Icon', color, ...props },
	ref
) {
	const SvgIcon = PhoenixIconsSrc[props.icon]

	return (
		<StyledIconContainer
			$size={size}
			$color={color}
			ref={ref}
			data-testid={testId}
			{...props}
		>
			<Suspense fallback={null}>
				<SvgIcon width="100%" height="100%" />
			</Suspense>
		</StyledIconContainer>
	)
})
