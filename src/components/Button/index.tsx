import React, { forwardRef, FunctionComponent } from 'react'

import {
	ButtonWrapper,
	ButtonContent,
	ButtonText,
	StyledSVG
} from './ButtonStyles'
import { ColorTheme } from '../../theme/ColorTheme'
import { ComponentSize } from '../../enum/ComponentSize'
import { ButtonIconAlignment } from './ButtonIconAlignment'
import ButtonLoader from './ButtonLoader'

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
					<StyledSVG src={props.icon} />
				)}

				<ButtonText withIcon={!!props.icon}>{props.children}</ButtonText>

				{/* TODO: unify with link icons */}
				{props.icon && props.iconAlignment === ButtonIconAlignment.RIGHT && (
					<StyledSVG src={props.icon} />
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
