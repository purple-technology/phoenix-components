import React from 'react'

import { ButtonColorTheme } from '../../../types/ColorTheme'
import { ComponentSize } from '../../../types/ComponentSize'
import { IconAlignment } from '../../../types/IconAlignment'
import { IconType } from '../../../types/IconType'
import { MarginProps } from '../Spacing/MarginProps'
import ButtonIcon from './ButtonIcon'
import ButtonLoader from './ButtonLoader'
import { ButtonContent, ButtonText } from './ButtonStyles'

export interface CommonButtonProps extends MarginProps {
	/** Theme of the button - background color */
	colorTheme?: ButtonColorTheme
	/** Size of the button; affects padding, line-height, and font-size */
	size?: ComponentSize
	/** Minimal styling of the button - no background, border etc. */
	minimal?: boolean
	/** Light or dark button */
	light?: boolean
	icon?: IconType
	iconAlignment?: IconAlignment
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
			{iconAlignment === 'left' && (
				<ButtonIcon icon={icon} iconAlignment={iconAlignment} size={size} />
			)}

			<ButtonText withIcon={!!icon}>{children}</ButtonText>

			{iconAlignment === 'right' && (
				<ButtonIcon icon={icon} iconAlignment={iconAlignment} size={size} />
			)}
		</ButtonContent>
	</>
)

export default ButtonInner
