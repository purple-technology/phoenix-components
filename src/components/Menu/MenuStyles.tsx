import SVG, { Props } from 'react-inlinesvg'
import styled, { css, RuleSet } from 'styled-components'

import { ColorTheme } from '../../types/Color'
import { isPhoenixIconColored } from '../../utils/icons'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { Icon } from '../Icon'
import { MenuItemIconProps } from './MenuItemIcon'

export const StyledMenu = styled.ul<PaddingProps & MarginProps>`
	list-style: none;
	margin: 0;
	min-width: 180px;
	text-align: start;

	${paddingCss}
	${marginCss}
`

export const StyledMenuItem = styled.li<PaddingProps & MarginProps>`
	list-style: none;

	${paddingCss}
	${marginCss}
`

interface MenuItemBaseCssProps {
	colorTheme?: ColorTheme
	disabled?: boolean
}

const menuItemBaseCss = css<MenuItemBaseCssProps>`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 6px 7px;
	color: ${({ theme, disabled, colorTheme }): string =>
		disabled
			? theme.tokens.color.text.quaternary
			: colorTheme
			? theme.tokens.color.text[colorTheme].primary
			: theme.tokens.color.text.secondary};
	user-select: none;
	line-height: 20px;
	border-radius: ${({ theme }): string => theme.tokens.menu.borderRadius.item};
	cursor: ${({ disabled }): string => (disabled ? 'default' : 'pointer')};

	${({ theme, disabled }): RuleSet | undefined =>
		!disabled
			? css`
					&:hover {
						background: ${theme.tokens.color.background.neutral.secondary};
					}
			  `
			: undefined}
`

export const StyledMenuItemButton = styled.button<MenuItemBaseCssProps>`
	${menuItemBaseCss};
	border: none;
	background: inherit;
	width: 100%;
	font-size: 14px;
	font-family: ${({ theme }): string => theme.tokens.ref.fontFamily.base};
`

export const StyledMenuItemAnchor = styled.a<MenuItemBaseCssProps>`
	${menuItemBaseCss}
`

export const styledIconCss = css<MenuItemIconProps>`
	width: 20px;
	height: 20px;
	margin-inline-end: 8px;

	${({ theme, icon, disabled, colorTheme }): string =>
		isPhoenixIconColored(icon)
			? ''
			: `
					path {
						fill: ${
							disabled
								? theme.tokens.color.text.quaternary
								: colorTheme
								? theme.tokens.color.text[colorTheme].primary
								: theme.tokens.color.text.secondary
						};
					}
			  `}
`

export const StyledCustomIcon = styled(SVG)<
	Props & { disabled: boolean; colorTheme: ColorTheme }
>`
	${styledIconCss}
`

export const StyledIcon = styled(Icon)`
	${styledIconCss}
`
