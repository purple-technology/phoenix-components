import React from 'react'
import SVG from 'react-inlinesvg'
import styled, { DefaultTheme } from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { ButtonIconAlignment } from './ButtonIconAlignment'
import { ButtonProps } from './index'

export const getSizeRelatedStyles = (
	size: ComponentSize,
	theme: DefaultTheme
) => {
	let styles = `
		min-height: ${theme.button.height[size]}px;
	`
	switch (size) {
		case ComponentSize.TINY:
			styles += `
				font-size: 14px;
				padding: 0 12px;
				border-radius: 4px;
			`
			break
		case ComponentSize.SMALL:
			styles += `
				font-size: 14px;
				padding: 0 16px;
				border-radius: 4px;
			`
			break
		case ComponentSize.LARGE:
			styles += `
				font-size: 15px;
				padding: 0 26px;	
				border-radius: 6px;
			`
			break
		case ComponentSize.MEDIUM:
		default:
			styles += `
				font-size: 14px;
				padding: 0 22px;
				border-radius: 5px;
			`
	}

	return styles
}

const getColorThemeStyles = (
	minimal: boolean,
	colorTheme: ColorTheme,
	light: boolean,
	theme: DefaultTheme
) => {
	/** Minimal styles */
	if (minimal) {
		return `
			background: transparent;
			color: ${theme.colors.text};
			&:hover {
				color: ${theme.colors[colorTheme].dark};
			}
			path {
				transition: fill .2s;
				fill: ${theme.colors.text};
			}
			&:hover path {
				fill: ${theme.colors[colorTheme].dark};
			}
			&:focus {
				box-shadow: 0 0 0 3px ${theme.colors.focus};
			}
			&[disabled] {
				color: ${theme.colors[colorTheme].textDisabled};
			}
		`
		/** Styles of the light button */
	} else if (light) {
		return `
			background: ${theme.colors[colorTheme].light};
			color: ${theme.colors[colorTheme].dark};
			&:hover {
				background: ${theme.colors[colorTheme].dark};
				color: #fff;
			}
			path {
				transition: fill .2s;
				fill: ${theme.colors[colorTheme].dark};
			}
			&:hover path {
				fill: #fff;
			}
			&:focus {
				box-shadow: 0 0 0 3px ${theme.colors.focus};
			}
			&[disabled] {
				color: ${theme.colors[colorTheme].lightDisabledColor};
				background: ${theme.colors[colorTheme].lightDisabledBackground};
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

export const getBaseStyles = (theme: DefaultTheme) => `
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
	loading: boolean
}

export const ButtonContent = styled.div<ButtonContentProps>`
	display: flex;
	align-items: center;
	${({ loading }) =>
		loading
			? `
		visibility: hidden;
	`
			: ''}
`

export const ButtonWrapper = styled.button<ButtonProps>`
	${(props) => getBaseStyles(props.theme)}
	${(props) => getSizeRelatedStyles(props.componentSize, props.theme)}
	${(props) =>
		getColorThemeStyles(
			props.minimal,
			props.colorTheme,
			props.light,
			props.theme
		)}
`

interface ButtonTextProps {
	withIcon: boolean
}

export const ButtonText = styled.div<ButtonTextProps>`
	display: inline-block;
`

interface IconProps {
	iconAlignment: ButtonIconAlignment
}

export const Icon = styled(SVG)<IconProps>`
	${({ iconAlignment }) =>
		iconAlignment === ButtonIconAlignment.LEFT
			? 'margin-right: .6em;'
			: 'margin-left: .6em;'}
`
