import React, { forwardRef } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import ButtonInner, { CommonButtonProps } from '../common/Button'
import { ButtonWrapper } from '../common/Button/ButtonStyles'

export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
		CommonButtonProps,
		GenericComponentProps {
	/** @deprecated Secondary style button. Please use current prop "secondary" instead. This prop will be removed in next major version. */
	light?: boolean
}

/**
 * `Button` component supports all props from `ButtonHTMLAttributes<HTMLButtonElement>` interface.
 */
export const Button: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<ButtonProps> & React.RefAttributes<HTMLButtonElement>
> = forwardRef(function Button(
	{
		colorTheme = 'brand',
		size = 'md',
		iconAlignment = 'left',
		type = 'button',
		testId = 'Button',
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
		type,
		size,
		colorTheme,
		secondary: secondaryStyle,
		minimal,
		icon
	}

	return (
		<ButtonWrapper ref={ref} data-testid={testId} {...wrapperProps}>
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
		</ButtonWrapper>
	)
})
