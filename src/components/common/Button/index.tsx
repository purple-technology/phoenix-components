import React from 'react'

import { ComponentSize } from '../../../enum/ComponentSize'
import { ColorTheme } from '../../../theme/ColorTheme'
import { ButtonIconAlignment } from './ButtonIconAlignment'
import ButtonLoader from './ButtonLoader'
import { ButtonContent, ButtonText, Icon } from './ButtonStyles'

export interface CommonButtonProps {
	/** Theme of the button - background color */
	colorTheme?: ColorTheme
	/** Size of the button; affects padding, line-height, and font-size */
	componentSize?: ComponentSize
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
	loading,
	componentSize,
	light,
	icon,
	iconAlignment,
	children
}) => (
	<>
		{loading && (
			<ButtonLoader
				componentSize={componentSize}
				colorTheme={colorTheme}
				light={light}
			/>
		)}
		<ButtonContent loading={loading}>
			{/* TODO: unify with link icons */}
			{icon && iconAlignment === ButtonIconAlignment.LEFT && (
				<Icon src={icon} $iconAlignment={iconAlignment} />
			)}

			<ButtonText withIcon={!!icon}>{children}</ButtonText>

			{/* TODO: unify with link icons */}
			{icon && iconAlignment === ButtonIconAlignment.RIGHT && (
				<Icon src={icon} $iconAlignment={iconAlignment} />
			)}
		</ButtonContent>
	</>
)

export default ButtonInner
