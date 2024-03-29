import React, { PropsWithChildren } from 'react'

import { ColorTheme } from '../../../types/Color'
import { IconAlignment } from '../../../types/IconAlignment'
import { IconType } from '../../../types/IconType'
import { Sizing } from '../../../types/Sizing'
import { Spinner } from '../../Spinner'
import { MarginProps } from '../Spacing/MarginProps'
import ButtonIcon from './ButtonIcon'
import { ButtonContent, ButtonLoader, ButtonText } from './ButtonStyles'

export interface CommonButtonProps extends MarginProps {
	/** Theme of the button - background color */
	colorTheme?: ColorTheme
	/** Size of the button; affects padding, line-height, and font-size */
	size?: Sizing
	/** Minimal styling of the button - no background, border etc. */
	minimal?: boolean
	/** Secondary style button */
	secondary?: boolean
	/** Outline style button */
	outline?: boolean
	icon?: IconType
	iconAlignment?: IconAlignment
	loading?: boolean
}

const ButtonInner: React.FC<PropsWithChildren<CommonButtonProps>> = ({
	colorTheme = 'brand',
	size = 'md',
	loading,
	secondary,
	icon,
	iconAlignment,
	children
}) => (
	<>
		{loading && (
			<ButtonLoader>
				<Spinner size={size} colorTheme={colorTheme} light={!secondary} />
			</ButtonLoader>
		)}
		<ButtonContent $loading={loading}>
			{iconAlignment === 'left' && <ButtonIcon icon={icon} size={size} />}

			<ButtonText icon={!!icon} iconAlignment={iconAlignment}>
				{children}
			</ButtonText>

			{iconAlignment === 'right' && <ButtonIcon icon={icon} size={size} />}
		</ButtonContent>
	</>
)

export default ButtonInner
