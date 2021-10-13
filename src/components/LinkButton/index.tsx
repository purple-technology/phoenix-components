import React, { forwardRef } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import ButtonInner, { CommonButtonProps } from '../common/Button'
import { LinkButtonWrapper } from '../common/Button/ButtonStyles'

export interface LinkButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		CommonButtonProps,
		GenericComponentProps {}

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
		testId = 'LinkButton',
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
		<LinkButtonWrapper ref={ref} data-testid={testId} {...wrapperProps}>
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
