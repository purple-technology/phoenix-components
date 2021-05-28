import React, { forwardRef } from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { ButtonIconAlignment } from './ButtonIconAlignment'
import ButtonLoader from './ButtonLoader'
import { ButtonContent, ButtonText, ButtonWrapper, Icon } from './ButtonStyles'

// export type ButtonProps<
// 	E extends HTMLButtonElement | HTMLAnchorElement = HTMLButtonElement
// > = (E extends HTMLButtonElement
// 	? React.ButtonHTMLAttributes<HTMLButtonElement>
// 	: React.AnchorHTMLAttributes<HTMLAnchorElement>) & {
// 	name?: string
// 	type?: 'button' | 'submit' | 'reset'
// 	/** Theme of the button - background color, font color and shadow */
// 	colorTheme?: ColorTheme
// 	/** Size of the button; affects padding, line-height, and font-size */
// 	componentSize?: ComponentSize
// 	/** Minimal styling of the button - no background, border etc. */
// 	minimal?: boolean
// 	disabled?: boolean
// 	/** Light or dark button */
// 	light?: boolean
// 	onClick?: (event: React.MouseEvent) => void
// 	className?: string
// 	icon?: string
// 	iconAlignment?: ButtonIconAlignment
// 	loading?: boolean
// 	href?: string
// 	target?: string
// 	/** Content of the button */
// 	children?: React.ReactNode
// }

// export type ButtonProps<
// 	E extends HTMLButtonElement | HTMLAnchorElement = HTMLButtonElement
// > = (E extends HTMLButtonElement
// 	? React.ButtonHTMLAttributes<HTMLButtonElement>
// 	: React.AnchorHTMLAttributes<HTMLAnchorElement>) & {
// 	/** Theme of the button - background color, font color and shadow */
// 	colorTheme?: ColorTheme
// 	/** Size of the button; affects padding, line-height, and font-size */
// 	componentSize?: ComponentSize
// 	/** Minimal styling of the button - no background, border etc. */
// 	minimal?: boolean
// 	/** Light or dark button */
// 	light?: boolean
// 	icon?: string
// 	iconAlignment?: ButtonIconAlignment
// 	loading?: boolean
// 	// href?: string
// 	// target?: string
// }

// interface ButtonButtonProps extends HTMLButtonElement {
// 	/** Theme of the button - background color, font color and shadow */
// 	colorTheme?: ColorTheme
// 	/** Size of the button; affects padding, line-height, and font-size */
// 	componentSize?: ComponentSize
// 	/** Minimal styling of the button - no background, border etc. */
// 	minimal?: boolean
// 	/** Light or dark button */
// 	light?: boolean
// 	icon?: string
// 	iconAlignment?: ButtonIconAlignment
// 	loading?: boolean
// 	href: never
// }
//
// interface ButtonAnchorProps extends HTMLAnchorElement {
// 	/** Theme of the button - background color, font color and shadow */
// 	colorTheme?: ColorTheme
// 	/** Size of the button; affects padding, line-height, and font-size */
// 	componentSize?: ComponentSize
// 	/** Minimal styling of the button - no background, border etc. */
// 	minimal?: boolean
// 	/** Light or dark button */
// 	light?: boolean
// 	icon?: string
// 	iconAlignment?: ButtonIconAlignment
// 	loading?: boolean
// }

interface CommonButtonProps {
	/** Theme of the button - background color, font color and shadow */
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

interface ButtonButtonProps extends HTMLButtonElement, CommonButtonProps {
	href: never
}

interface ButtonAnchorProps extends HTMLAnchorElement, CommonButtonProps {}

export type ButtonProps = ButtonButtonProps | ButtonAnchorProps

const Button: React.FC<ButtonProps> = forwardRef<
	HTMLButtonElement,
	ButtonProps
>(
	(
		{
			colorTheme = ColorTheme.PRIMARY,
			componentSize= ComponentSize.MEDIUM,
			minimal,
			light,
			icon,
			iconAlignment,
			loading,
			children,
			...props
		},
		ref
	) => {
		// TODO: typing
		return (
			<ButtonWrapper
				as={props.href ? 'a' : 'button'}
				ref={ref}
				componentSize={componentSize}
				colorTheme={colorTheme}
				light={light}
				minimal={minimal}
				{...props}
			>
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
						<Icon src={icon} iconAlignment={iconAlignment} />
					)}

					<ButtonText withIcon={!!icon}>{children}</ButtonText>

					{/* TODO: unify with link icons */}
					{icon && iconAlignment === ButtonIconAlignment.RIGHT && (
						<Icon src={icon} iconAlignment={iconAlignment} />
					)}
				</ButtonContent>
			</ButtonWrapper>
		)
	}
)

Button.defaultProps = {
	type: 'button',
	colorTheme: ColorTheme.PRIMARY,
	componentSize: ComponentSize.MEDIUM,
	iconAlignment: ButtonIconAlignment.LEFT
}

export default Button
