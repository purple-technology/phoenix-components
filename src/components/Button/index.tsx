import React, { forwardRef, FunctionComponent } from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { ButtonIconAlignment } from './ButtonIconAlignment'
import ButtonLoader from './ButtonLoader'
import { ButtonContent, ButtonText, ButtonWrapper, Icon } from './ButtonStyles'

export type ButtonProps<
	E extends HTMLButtonElement | HTMLAnchorElement = HTMLButtonElement
> = (E extends HTMLButtonElement
	? React.ButtonHTMLAttributes<HTMLButtonElement>
	: React.AnchorHTMLAttributes<HTMLAnchorElement>) & {
	name?: string
	type?: 'button' | 'submit' | 'reset'
	/** Theme of the button - background color, font color and shadow */
	colorTheme?: ColorTheme
	/** Size of the button; affects padding, line-height, and font-size */
	componentSize?: ComponentSize
	/** Minimal styling of the button - no background, border etc. */
	minimal?: boolean
	disabled?: boolean
	/** Light or dark button */
	light?: boolean
	onClick?: (event: React.MouseEvent) => void
	className?: string
	icon?: string
	iconAlignment?: ButtonIconAlignment
	loading?: boolean
	href?: string
	target?: string
	/** Content of the button */
	children?: React.ReactNode
}

const Button: FunctionComponent<ButtonProps> = forwardRef<
	HTMLButtonElement,
	ButtonProps
>((props, ref) => {
	return (
		<ButtonWrapper as={props.href ? 'a' : 'button'} ref={ref} {...props}>
			{props.loading && (
				<ButtonLoader
					componentSize={props.componentSize}
					colorTheme={props.colorTheme}
					light={props.light}
				/>
			)}
			<ButtonContent loading={props.loading}>
				{/* TODO: unify with link icons */}
				{props.icon && props.iconAlignment === ButtonIconAlignment.LEFT && (
					<Icon src={props.icon} iconAlignment={props.iconAlignment} />
				)}

				<ButtonText withIcon={!!props.icon}>{props.children}</ButtonText>

				{/* TODO: unify with link icons */}
				{props.icon && props.iconAlignment === ButtonIconAlignment.RIGHT && (
					<Icon src={props.icon} iconAlignment={props.iconAlignment} />
				)}
			</ButtonContent>
		</ButtonWrapper>
	)
})

Button.defaultProps = {
	type: 'button',
	colorTheme: ColorTheme.PRIMARY,
	componentSize: ComponentSize.MEDIUM,
	iconAlignment: ButtonIconAlignment.LEFT
}

export default Button
