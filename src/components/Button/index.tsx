import React, { forwardRef } from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import ButtonInner, { CommonButtonProps } from '../common/Button'
import { ButtonIconAlignment } from '../common/Button/ButtonIconAlignment'
import { ButtonWrapper } from '../common/Button/ButtonStyles'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		CommonButtonProps {}

const Button: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<ButtonProps> & React.RefAttributes<HTMLButtonElement>
> = forwardRef(function Button(
	{
		colorTheme = ColorTheme.PRIMARY,
		componentSize = ComponentSize.MEDIUM,
		iconAlignment = ButtonIconAlignment.LEFT,
		type = 'button',
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
		componentSize,
		colorTheme,
		light,
		minimal
	}

	return (
		<ButtonWrapper ref={ref} {...wrapperProps}>
			<ButtonInner
				loading={loading}
				componentSize={componentSize}
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

Button.defaultProps = {
	colorTheme: ColorTheme.PRIMARY,
	componentSize: ComponentSize.MEDIUM,
	iconAlignment: ButtonIconAlignment.LEFT
}

export default Button
