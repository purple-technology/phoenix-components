import React from 'react'

import { ColorTheme } from '../../enum/ColorTheme'
import { ComponentSize } from '../../enum/ComponentSize'
import ButtonInner, { CommonButtonProps } from '../common/Button'
import { ButtonIconAlignment } from '../common/Button/ButtonIconAlignment'
import { LinkButtonWrapper } from '../common/Button/ButtonStyles'

export interface LinkButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		CommonButtonProps {}

const LinkButton: React.FC<LinkButtonProps> = ({
	colorTheme = ColorTheme.PRIMARY,
	size = ComponentSize.MEDIUM,
	iconAlignment = ButtonIconAlignment.LEFT,
	type = 'button',
	minimal,
	light,
	icon,
	loading,
	children,
	...props
}) => {
	const wrapperProps = {
		...props,
		type,
		size,
		colorTheme,
		light,
		minimal
	}

	return (
		<LinkButtonWrapper {...wrapperProps}>
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
}

export default LinkButton
