import SVG from 'react-inlinesvg'
import styled, { css, DefaultTheme } from 'styled-components'

import { ComponentSize } from '../../../enum/ComponentSize'
import { ButtonColorTheme } from '../../../theme/ColorTheme'
import { ButtonIconAlignment } from './ButtonIconAlignment'

export const getSizeRelatedStyles = (
	size: ComponentSize,
	theme: DefaultTheme
): string => {
	let styles = `
		min-height: ${theme.button.height[size]}px;
	`
	switch (size) {
		case ComponentSize.TINY:
			styles += `
				font-size: 14px;
				padding: 6px 12px;
				border-radius: 4px;
			`
			break
		case ComponentSize.SMALL:
			styles += `
				font-size: 14px;
				padding: 8px 16px;
				border-radius: 4px;
			`
			break
		case ComponentSize.LARGE:
			styles += `
				font-size: 15px;
				padding: 16px 26px;	
				border-radius: 6px;
			`
			break
		case ComponentSize.MEDIUM:
		default:
			styles += `
				font-size: 14px;
				padding: 12px 22px;
				border-radius: 5px;
			`
	}

	return styles
}

export const getColorThemeStyles = (
	theme: DefaultTheme,
	colorTheme: ButtonColorTheme,
	minimal?: boolean,
	light?: boolean
): string => {
	/** Minimal styles */
	if (minimal) {
		return `
			background: transparent;
			color: ${theme.colors.text};
			&:hover {
				background: ${theme.button.minimalHoverBackground};
			}
			path {
				transition: fill .2s;
				fill: ${theme.colors.text};
			}
			&:focus {
				box-shadow: 0 0 0 3px ${theme.colors.focus};
			}
			&[disabled] {
				color: ${theme.colors.textDisabled};
				background: transparent;
			}
			&[disabled] path {
				fill: ${theme.colors.textDisabled};
			}
		`
		/** Styles of the light button */
	} else if (light) {
		return `
			background: ${theme.colors[colorTheme].light};
			color: ${theme.colors[colorTheme].dark};
			&:hover {
				background: ${theme.colors[colorTheme].lightHoverBackground};
			}
			path {
				transition: fill .2s;
				fill: ${theme.colors[colorTheme].dark};
			}
			&:focus {
				box-shadow: 0 0 0 3px ${theme.colors.focus};
			}
			&[disabled] {
				color: ${theme.colors[colorTheme].lightDisabledColor};
				background: ${theme.colors[colorTheme].lightDisabledBackground};
			}
			&[disabled] path {
				fill: ${theme.colors[colorTheme].lightDisabledColor};
			}
		`
		/** Styles of the dark button */
	} else {
		return `
				background: ${theme.colors[colorTheme].dark};
				color: #fff;
				box-shadow: ${theme.button.boxShadow};
				&:hover {
					background: ${theme.colors[colorTheme].darkHoverBackground};
					color: #fff;
				}
				path {
					transition: fill .2s;
					fill: #fff;
				}
				&:focus {
					box-shadow: ${theme.button.boxShadow}, 0 0 0 3px ${theme.colors.focus};
				}
				&[disabled] {
					background: ${theme.colors[colorTheme].darkDisabledBackground};
				}
			`
	}
}

export const getBaseStyles = (theme: DefaultTheme): string => `
	display: inline-flex;
	font-family: ${theme.fontFamily};
	outline: none;
	cursor: pointer;
	font-style: normal;
	font-weight: 500;
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
	size: ComponentSize
	colorTheme: ButtonColorTheme
	minimal?: boolean
	light?: boolean
	icon?: string
}

const commonButtonStyles = css<ButtonWrapperProps>`
	${(props): string => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles(props.size, props.theme)}
	${(props): string =>
		getColorThemeStyles(
			props.theme,
			props.colorTheme,
			props.minimal,
			props.light
		)}

	/** These styles are specific for stand-alone component Button */
	text-align: ${({ icon }): string => (icon ? 'left' : 'center')};
`

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
	${commonButtonStyles}
`

export const LinkButtonWrapper = styled.a<ButtonWrapperProps>`
	${commonButtonStyles}
`

interface ButtonTextProps {
	withIcon: boolean
}

export const ButtonText = styled.div<ButtonTextProps>`
	flex: 1;
`

interface IconProps {
	$iconAlignment: ButtonIconAlignment
	$size: ComponentSize
}

export const Icon = styled(SVG)<IconProps>`
	${({ $iconAlignment }): string =>
		$iconAlignment === ButtonIconAlignment.LEFT
			? 'margin-right: .6em;'
			: 'margin-left: .6em;'}
	${({ theme, $size }): string => `
		width: ${theme.button.iconSize[$size] + 'px'};
		height: ${theme.button.iconSize[$size] + 'px'};
	`}
`
