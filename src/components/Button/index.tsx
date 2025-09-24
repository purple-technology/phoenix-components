import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import ButtonInner, { CommonButtonProps } from '../common/Button'
import { ButtonWrapper } from '../common/Button/ButtonStyles'

export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
		CommonButtonProps,
		GenericComponentProps {
	/** @deprecated Secondary style button. Please use current prop "secondary" instead. This prop will be removed in next major version. */
	light?: boolean
	ref?: React.Ref<HTMLButtonElement>
}

/**
 * `Button` component supports all props from `ButtonHTMLAttributes<HTMLButtonElement>` interface.
 */
export const Button: React.FC<ButtonProps> = ({
	colorTheme = 'brand',
	size = 'md',
	iconAlignment = 'left',
	type = 'button',
	testId = 'Button',
	secondary,
	light,
	icon,
	minimal,
	outline,
	loading,
	children,
	ref,
	...props
}) => {
	const secondaryStyle = secondary ?? light

	const wrapperProps = {
		...props,
		type,
		size
	}

	return (
		<ButtonWrapper
			ref={ref}
			data-testid={testId}
			$colorTheme={colorTheme}
			$minimal={minimal}
			$secondary={secondaryStyle}
			$outline={outline}
			$icon={icon}
			{...wrapperProps}
		>
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
}
