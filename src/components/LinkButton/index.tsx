import React, { forwardRef } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import ButtonInner, { CommonButtonProps } from '../common/Button'
import { LinkButtonWrapper } from '../common/Button/ButtonStyles'

export interface LinkButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		CommonButtonProps,
		GenericComponentProps {
	/** @deprecated Secondary style button. Please use current prop "secondary" instead. This prop will be removed in next major version. */
	light?: boolean
}

/**
 * `LinkButton` component supports all props from `AnchorHTMLAttributes<HTMLAnchorElement>` interface.
 */
export const LinkButton: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<LinkButtonProps> &
		React.RefAttributes<HTMLAnchorElement>
> = forwardRef(function LinkButton(
	{
		colorTheme = 'brand',
		size = 'md',
		iconAlignment = 'left',
		testId = 'LinkButton',
		minimal,
		secondary,
		light,
		icon,
		loading,
		children,
		...props
	},
	ref
) {
	const secondaryStyle = secondary ?? light

	const wrapperProps = {
		...props,
		size,
		colorTheme,
		secondary: secondaryStyle,
		minimal
	}

	return (
		<LinkButtonWrapper ref={ref} data-testid={testId} {...wrapperProps}>
			<ButtonInner
				loading={loading}
				size={size}
				colorTheme={colorTheme}
				secondary={secondaryStyle}
				icon={icon}
				iconAlignment={iconAlignment}
			>
				{children}
			</ButtonInner>
		</LinkButtonWrapper>
	)
})
