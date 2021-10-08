import React, { forwardRef } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import ButtonInner, { CommonButtonProps } from '../common/Button'
import { ButtonWrapper } from '../common/Button/ButtonStyles'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		CommonButtonProps,
		GenericComponentProps {}

/**
 * `Button` component supports all props from `ButtonHTMLAttributes<HTMLButtonElement>` interface.
 */
export const Button: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<ButtonProps> & React.RefAttributes<HTMLButtonElement>
> = forwardRef(function Button(
	{
		colorTheme = 'primary',
		size = 'medium',
		iconAlignment = 'left',
		type = 'button',
		testId = 'Button',
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
		type,
		size,
		colorTheme,
		light,
		minimal,
		icon
	}

	return (
		<ButtonWrapper ref={ref} data-testid={testId} {...wrapperProps}>
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
		</ButtonWrapper>
	)
})
