import React from 'react'

import { ButtonColorTheme } from '../../../types/ColorTheme'
import { ComponentSize } from '../../../types/ComponentSize'
import { ButtonIconAlignment } from './ButtonIconAlignment'
import ButtonLoader from './ButtonLoader'
import { ButtonContent, ButtonText, Icon } from './ButtonStyles'

export interface CommonButtonProps {
	/** Theme of the button - background color */
	colorTheme?: ButtonColorTheme
	/** Size of the button; affects padding, line-height, and font-size */
	size?: ComponentSize
	/** Minimal styling of the button - no background, border etc. */
	minimal?: boolean
	/** Light or dark button */
	light?: boolean
	icon?: string
	iconAlignment?: ButtonIconAlignment
	loading?: boolean
}

const ButtonInner: React.FC<CommonButtonProps> = ({
	colorTheme = 'primary',
	size = 'medium',
	loading,
	light,
	icon,
	iconAlignment,
	children
}) => (
	<>
		{loading && (
			<ButtonLoader size={size} colorTheme={colorTheme} light={light} />
		)}
		<ButtonContent $loading={loading}>
			{icon && iconAlignment === 'left' && (
				<Icon src={icon} $iconAlignment={iconAlignment} $size={size} />
			)}

			<ButtonText withIcon={!!icon}>{children}</ButtonText>

			{icon && iconAlignment === 'right' && (
				<Icon src={icon} $iconAlignment={iconAlignment} $size={size} />
			)}
		</ButtonContent>
	</>
)

export default ButtonInner