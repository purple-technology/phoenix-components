import SVG from 'react-inlinesvg'
import styled, {
	css,
	DefaultTheme,
	FlattenSimpleInterpolation
} from 'styled-components'

import { ButtonColorTheme } from '../../../types/ColorTheme'
import { ComponentSize } from '../../../types/ComponentSize'
import { IconAlignment } from '../../../types/IconAlignment'
import { IconType } from '../../../types/IconType'
import { Icon } from '../../Icon'
import { marginCss } from '../Spacing/SpacingStyles'

export const getSizeRelatedStyles = (
	size: ComponentSize,
	theme: DefaultTheme
): string => {
	let styles = `
		min-height: ${theme.$pc.button.height[size]}px;
	`
	switch (size) {
		case 'tiny':
			styles += `
				font-size: 14px;
				padding: 6px 12px;
				border-radius: 4px;
			`
			break
		case 'small':
			styles += `
				font-size: 14px;
				padding: 8px 16px;
				border-radius: 4px;
			`
			break
		case 'large':
			styles += `
				font-size: 15px;
				padding: 16px 26px;	
				border-radius: 6px;
			`
			break
		case 'medium':
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
			color: ${theme.$pc.colors.text.dark};
			&:hover {
				background: ${theme.$pc.button.minimalHoverBackground};
			}
			path {
				transition: fill ${theme.$pc.transitionDuration};
				fill: ${theme.$pc.colors.text.dark};
			}
			&:focus {
				box-shadow: 0 0 0 3px ${theme.$pc.colors.focus};
			}
			&[disabled] {
				color: ${theme.$pc.colors.text.lightest};
				background: transparent;
			}
			&[disabled] path {
				fill: ${theme.$pc.colors.text.lightest};
			}
		`
		/** Styles of the light button */
	} else if (light) {
		return `
			background: ${theme.$pc.colors[colorTheme].light};
			color: ${theme.$pc.colors[colorTheme].dark};
			&:hover {
				background: ${theme.$pc.colors[colorTheme].lightHoverBackground};
			}
			path {
				transition: fill ${theme.$pc.transitionDuration};
				fill: ${theme.$pc.colors[colorTheme].dark};
			}
			&:focus {
				box-shadow: 0 0 0 3px ${theme.$pc.colors.focus};
			}
			&[disabled] {
				color: ${theme.$pc.colors[colorTheme].lightDisabledColor};
				background: ${theme.$pc.colors[colorTheme].lightDisabledBackground};
			}
			&[disabled] path {
				fill: ${theme.$pc.colors[colorTheme].lightDisabledColor};
			}
		`
		/** Styles of the dark button */
	} else {
		return `
				background: ${theme.$pc.colors[colorTheme].dark};
				color: #fff;
				box-shadow: ${theme.$pc.button.boxShadow};
				&:hover {
					background: ${theme.$pc.colors[colorTheme].darkHoverBackground};
					color: #fff;
				}
				path {
					transition: fill ${theme.$pc.transitionDuration};
					fill: #fff;
				}
				&:focus {
					box-shadow: ${theme.$pc.button.boxShadow}, 0 0 0 3px ${theme.$pc.colors.focus};
				}
				&[disabled] {
					background: ${theme.$pc.colors[colorTheme].darkDisabledBackground};
				}
			`
	}
}

export const getBaseStyles = (
	theme: DefaultTheme
): FlattenSimpleInterpolation => css`
	// When display: flex is used, LinkButton is stretched 100% and close button is wrapped on the next line in a Notice component
	display: inline-flex;
	font-family: ${theme.$pc.fontFamily};
	outline: none;
	cursor: pointer;
	font-style: normal;
	font-weight: ${theme.$pc.fontWeight.bold};
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
			props.light
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
	$size: ComponentSize
}

export const styledIconCss = css<StyledIconProps>`
	${({ theme, $size }): string => `
		width: ${theme.$pc.button.iconSize[$size] + 'px'};
		height: ${theme.$pc.button.iconSize[$size] + 'px'};
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
