import React, { forwardRef } from 'react'

import ButtonInner, { CommonButtonProps } from '../common/Button'
import { LinkButtonWrapper } from '../common/Button/ButtonStyles'

export interface LinkButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		CommonButtonProps {}

/**
 * `LinkButton` component supports all props from `AnchorHTMLAttributes<HTMLAnchorElement>` interface.
 */
export const LinkButton: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<LinkButtonProps> &
		React.RefAttributes<HTMLAnchorElement>
> = forwardRef(function LinkButton(
	{
		colorTheme = 'primary',
		size = 'medium',
		iconAlignment = 'left',
		minimal,
		light,
		icon,
		loading,
		children,
		...props
	},
	ref
) {
	const wrapperProps = {
		...props,
		size,
		colorTheme,
		light,
		minimal
	}

	return (
		<LinkButtonWrapper ref={ref} {...wrapperProps}>
			<ButtonInner
				loading={loading}
				size={size}
				colorTheme={colorTheme}
				light={light}
				icon={icon}
				iconAlignment={iconAlignment}
			>
				{children}
			</ButtonInner>
		</LinkButtonWrapper>
	)
})
