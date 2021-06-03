import React from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import ButtonInner, { CommonButtonProps } from '../common/Button'
import { ButtonIconAlignment } from '../common/Button/ButtonIconAlignment'
import { LinkButtonWrapper } from '../common/Button/ButtonStyles'

export interface LinkButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		CommonButtonProps {}

const LinkButton: React.FC<LinkButtonProps> = ({
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
}) => {
	const wrapperProps = {
		...props,
		type,
		componentSize,
		colorTheme,
		light,
		minimal
	}

	return (
		<LinkButtonWrapper {...wrapperProps}>
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
		</LinkButtonWrapper>
	)
}

export default LinkButton
