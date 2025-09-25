import SVG, { Props } from 'react-inlinesvg'
import styled, { css, DefaultTheme, RuleSet } from 'styled-components'

import {
	getBoxShadow,
	getLineHeightUnitless,
	getUnitlessNumber
} from '../../../tokens/helpers'
import { ColorTheme } from '../../../types/Color'
import { CSSValue } from '../../../types/CSSValue'
import { IconAlignment } from '../../../types/IconAlignment'
import { IconType } from '../../../types/IconType'
import { Sizing } from '../../../types/Sizing'
import { Icon } from '../../Icon'
import { MarginProps } from '../Spacing/MarginProps'
import { marginCss } from '../Spacing/SpacingStyles'

export const getSizeRelatedStyles = (
	size: Sizing,
	theme: DefaultTheme,
	outline?: boolean,
	icon?: boolean
): RuleSet => {
	const buttonHeight = parseInt(
		theme.tokens.inputButton.sizing.height[size],
		10
	)
	const textHeight = Math.max(
		getUnitlessNumber(theme.tokens.button.fontSize[size]) *
			getLineHeightUnitless(theme.tokens.ref.lineHeight.sm),
		icon ? getUnitlessNumber(theme.tokens.button.sizing.icon[size]) : 0
	)
	const borderHeight = outline
		? getUnitlessNumber(theme.tokens.button.borderWidth)
		: 0

	return css`
		min-height: ${theme.tokens.inputButton.sizing.height[size]};
		font-size: ${theme.tokens.button.fontSize[size]};
		padding: ${(buttonHeight - textHeight) / 2 - borderHeight}px
			${theme.tokens.button.spacing.x[size]};
		border-radius: ${theme.tokens.inputButton.borderRadius[size]};
	`
}

export const getColorThemeStyles = (
	theme: DefaultTheme,
	color: ColorTheme,
	minimal?: boolean,
	secondary?: boolean,
	outline?: boolean
): RuleSet => {
	const { tokens } = theme

	/** Minimal styles */
	if (minimal) {
		return css`
			background: transparent;
			color: ${tokens.color.text[color].primary};
			&:hover {
				background: ${tokens.color.background[color].secondary};
			}
			path {
				transition: fill ${tokens.duration.transition.base};
				fill: ${tokens.color.text[color].primary};
			}
			&:focus {
				box-shadow: 0 0 0 ${tokens.borderWidth.focus}
					${tokens.color.border.focus};
			}
			&[disabled] {
				color: ${tokens.color.text[color].disabled};
				background: transparent;
			}
			&[disabled] path {
				fill: ${tokens.color.text[color].disabled};
			}
		`
		/** Styles of the outline button */
	} else if (outline) {
		return css`
			background: transparent;
			color: ${tokens.color.text[color].primary};
			border: ${tokens.button.borderWidth} solid
				${tokens.color.border[color].primary};
			&:hover {
				background: ${tokens.color.background[color].primary};
				color: #fff;
				path {
					fill: #fff;
				}
			}
			path {
				transition: fill ${tokens.duration.transition.base};
				fill: ${tokens.color.text[color].primary};
			}
			&:focus {
				box-shadow: 0 0 0 ${tokens.borderWidth.focus}
					${tokens.color.border.focus};
			}
			&[disabled] {
				color: ${tokens.color.text[color].disabled};
				border: 1px solid ${tokens.color.background[color].primaryDisabled};
				background: transparent;
			}
			&[disabled] path {
				fill: ${tokens.color.text[color].disabled};
			}
		`
		/** Styles of the primary button */
	} else if (secondary) {
		return css`
			background: ${tokens.color.background[color].secondary};
			color: ${tokens.color.text[color].onSecondary};
			&:hover {
				background: ${tokens.color.background[color].secondaryInteraction};
			}
			path {
				transition: fill ${tokens.duration.transition.base};
				fill: ${tokens.color.text[color].onSecondary};
			}
			&:focus {
				box-shadow: 0 0 0 ${tokens.borderWidth.focus}
					${tokens.color.border.focus};
			}
			&[disabled] {
				color: ${tokens.color.text[color].disabled};
				background: ${tokens.color.background[color].secondaryDisabled};
			}
			&[disabled] path {
				fill: ${tokens.color.text[color].disabled};
			}
		`
		/** Styles of the primary button */
	} else {
		return css`
			background: ${tokens.color.background[color].primary};
			box-shadow: ${getBoxShadow(tokens.button.boxShadow.primary)};
			color: ${tokens.color.text[color].onPrimary};
			&:hover {
				background: ${tokens.color.background[color].primaryInteraction};
				color: ${tokens.color.text[color].onPrimary};
			}
			path {
				transition: fill ${tokens.duration.transition.base};
				fill: ${tokens.color.text[color].onPrimary};
			}
			&:focus {
				box-shadow: 0 0 0 ${tokens.borderWidth.focus}
					${tokens.color.border.focus};
			}
			&[disabled] {
				color: ${tokens.color.background.primary};
				background: ${tokens.color.background[color].primaryDisabled};
			}
		`
	}
}

export const getBaseStyles = (theme: DefaultTheme): RuleSet => css`
	// When display: flex is used, LinkButton is stretched 100% and close button is wrapped on the next line in a Notice component
	display: inline-flex;
	font-family: ${theme.tokens.ref.fontFamily.base};
	outline: none;
	cursor: pointer;
	font-style: normal;
	font-weight: ${theme.tokens.button.fontWeight};
	line-height: ${getLineHeightUnitless(theme.tokens.ref.lineHeight.sm)};
	border: 0;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	position: relative;
	text-decoration: none;

	&[disabled] {
		cursor: default;
	}
`

export interface ButtonContentProps {
	$loading?: boolean
}

export const ButtonContent = styled.div<ButtonContentProps>`
	display: flex;
	align-items: center;
	${({ $loading }): RuleSet =>
		$loading
			? css`
					visibility: hidden;
			  `
			: css``}
`

interface ButtonWrapperProps extends MarginProps {
	size: Sizing
	colorTheme: ColorTheme
	minimal?: boolean
	secondary?: boolean
	icon?: IconType
	outline?: boolean
}

const commonButtonStyles = css<ButtonWrapperProps>`
	${(props): RuleSet => getBaseStyles(props.theme)}
	${(props): RuleSet =>
		getSizeRelatedStyles(props.size, props.theme, props.outline, !!props.icon)}
	${(props): RuleSet =>
		getColorThemeStyles(
			props.theme,
			props.colorTheme,
			props.minimal,
			props.secondary,
			props.outline
		)}

	/** These styles are specific for stand-alone component Button */
	text-align: ${({ icon }): string => (icon ? 'start' : 'center')};

	${marginCss}
`

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
	${commonButtonStyles}
`

export const LinkButtonWrapper = styled.a<ButtonWrapperProps>`
	${commonButtonStyles}
`

interface ButtonTextProps {
	icon?: boolean
	iconAlignment?: IconAlignment
}

export const ButtonText = styled.div<ButtonTextProps>`
	flex: 1;
	display: flex;
	${({ children, icon, iconAlignment }): RuleSet | undefined =>
		children && icon
			? iconAlignment === 'left'
				? css`
						margin-inline-start: 0.6em;
				  `
				: css`
						margin-inline-end: 0.6em;
				  `
			: undefined}
`

interface StyledIconProps {
	size?: Sizing | CSSValue
}

export const styledIconCss = css<StyledIconProps>`
	${({ theme, size }): RuleSet =>
		size
			? css`
					width: ${theme.tokens.button.sizing.icon[size]};
					height: ${theme.tokens.button.sizing.icon[size]};
			  `
			: css`
					width: 24px;
					height: 24px;
			  `}
`

export const StyledCustomIcon = styled(SVG)<Props & { size: Sizing }>`
	${styledIconCss}
`

export const StyledIcon = styled(Icon)`
	${styledIconCss}
`

export const ButtonLoader = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`
