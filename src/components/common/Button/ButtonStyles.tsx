import SVG from 'react-inlinesvg'
import styled, {
	css,
	DefaultTheme,
	FlattenSimpleInterpolation
} from 'styled-components'

import { ColorTheme } from '../../../types/Color'
import { IconAlignment } from '../../../types/IconAlignment'
import { IconType } from '../../../types/IconType'
import { Sizing } from '../../../types/Sizing'
import { Icon } from '../../Icon'
import { marginCss } from '../Spacing/SpacingStyles'

export const getSizeRelatedStyles = (
	size: Sizing,
	theme: DefaultTheme
): string => {
	return `
		min-height: ${theme.tokens.inputButton.sizing.height[size]};
		font-size: ${theme.tokens.button.fontSize[size]};
		padding: ${
			(parseInt(theme.tokens.inputButton.sizing.height[size], 10) -
				parseInt(theme.tokens.button.fontSize[size], 10) * 1.4) /
			2
		}px ${theme.tokens.button.spacing.x[size]};
		border-radius: ${theme.tokens.ref.borderRadius[size === 'xs' ? 'sm' : 'md']};
	`
}

export const getColorThemeStyles = (
	theme: DefaultTheme,
	color: ColorTheme,
	minimal?: boolean,
	secondary?: boolean
): string => {
	/** Minimal styles */
	if (minimal) {
		return `
			background: transparent;
			color: ${theme.tokens.color.text[color].primary};
			&:hover {
				background: ${theme.tokens.color.background[color].secondary};
			}
			path {
				transition: fill ${theme.$pc.transitionDuration};
				fill: ${theme.tokens.color.text[color].primary};
			}
			&:focus {
				box-shadow: 0 0 0 ${theme.tokens.borderWidth.focus} ${theme.tokens.color.border.focus};
			}
			&[disabled] {
				color: ${theme.tokens.color.text[color].disabled};
				background: transparent;
			}
			&[disabled] path {
				fill: ${theme.tokens.color.text[color].primary};
			}
		`
		/** Styles of the secondary button */
	} else if (secondary) {
		return `
			background: ${theme.tokens.color.background[color].secondary};
			color: ${theme.tokens.color.text[color].primary};
			&:hover {
				background: ${theme.tokens.color.background[color].secondaryInteraction};
			}
			path {
				transition: fill ${theme.$pc.transitionDuration};
				fill: ${theme.tokens.color.text[color].primary};
			}
			&:focus {
				box-shadow: 0 0 0 ${theme.tokens.borderWidth.focus} ${theme.tokens.color.border.focus};
			}
			&[disabled] {
				color: ${theme.tokens.color.text[color].disabled};
				background: ${theme.tokens.color.background[color].secondaryDisabled};
			}
			&[disabled] path {
				fill: ${theme.tokens.color.text[color].disabled};
			}
		`
		/** Styles of the primary button */
	} else {
		return `
				background: ${theme.tokens.color.background[color].primary};
				color: #fff;
				box-shadow: ${theme.tokens.button.boxShadow.primary};
				&:hover {
					background: ${theme.tokens.color.background[color].primaryInteraction};
					color: #fff;
				}
				path {
					transition: fill ${theme.$pc.transitionDuration};
					fill: #fff;
				}
				&:focus {
					box-shadow: ${theme.tokens.button.boxShadow.primary}, 0 0 0 ${theme.tokens.borderWidth.focus} ${theme.tokens.color.border.focus};
				}
				&[disabled] {
					background: ${theme.tokens.color.background[color].primaryDisabled};
				}
			`
	}
}

export const getBaseStyles = (
	theme: DefaultTheme
): FlattenSimpleInterpolation => css`
	// When display: flex is used, LinkButton is stretched 100% and close button is wrapped on the next line in a Notice component
	display: inline-flex;
	font-family: ${theme.tokens.ref.fontFamily.base};
	outline: none;
	cursor: pointer;
	font-style: normal;
	font-weight: ${theme.tokens.ref.fontWeight.bold};
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
	${({ $loading }): string =>
		$loading
			? `
		visibility: hidden;
	`
			: ''}
`

interface ButtonWrapperProps {
	size: Sizing
	colorTheme: ColorTheme
	minimal?: boolean
	secondary?: boolean
	icon?: IconType
}

const commonButtonStyles = css<ButtonWrapperProps>`
	${(props): FlattenSimpleInterpolation => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles(props.size, props.theme)}
	${(props): string =>
		getColorThemeStyles(
			props.theme,
			props.colorTheme,
			props.minimal,
			props.secondary
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
	${({
		children,
		icon,
		iconAlignment
	}): FlattenSimpleInterpolation | undefined =>
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
	$size: Sizing
}

export const styledIconCss = css<StyledIconProps>`
	${({ theme, $size }): string => `
		width: ${theme.tokens.button.sizing.icon[$size]};
		height: ${theme.tokens.button.sizing.icon[$size]};
	`}
`

export const StyledCustomIcon = styled(SVG)`
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
