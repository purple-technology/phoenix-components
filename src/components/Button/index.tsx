import type React from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import ButtonInner, { type CommonButtonProps } from '../common/Button'
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
	loading,
	children,
	ref,
	...props
}) => {
	const secondaryStyle = secondary ?? light

	const wrapperProps = {
		...props,
		type,
		size,
		colorTheme,
		secondary: secondaryStyle,
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
}
