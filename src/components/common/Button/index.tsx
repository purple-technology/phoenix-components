import React from 'react'

import { ComponentSize } from '../../../enum/ComponentSize'
import { ButtonColorTheme, ColorTheme } from '../../../theme/ColorTheme'
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
	colorTheme = ColorTheme.PRIMARY,
	size = ComponentSize.MEDIUM,
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
			{/* TODO: unify with link icons */}
			{icon && iconAlignment === ButtonIconAlignment.LEFT && (
				<Icon src={icon} $iconAlignment={iconAlignment} $size={size} />
			)}

			<ButtonText withIcon={!!icon}>{children}</ButtonText>

			{/* TODO: unify with link icons */}
			{icon && iconAlignment === ButtonIconAlignment.RIGHT && (
				<Icon src={icon} $iconAlignment={iconAlignment} $size={size} />
			)}
		</ButtonContent>
	</>
)

export default ButtonInner
