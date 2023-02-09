import SVG from 'react-inlinesvg'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { ColorTheme } from '../../types/Color'
import { isPhoenixIconColored } from '../../utils/icons'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { Icon } from '../Icon'
import { MenuItemIconProps } from './MenuItemIcon'

export const StyledMenu = styled.ul`
	list-style: none;
	margin: 0;
	min-width: 180px;
	text-align: start;

	${paddingCss}
	${marginCss}
`

export const StyledMenuItem = styled.li`
	list-style: none;

	${paddingCss}
	${marginCss}
`

interface StyledMenuItemAnchorProps {
	colorTheme?: ColorTheme
	disabled?: boolean
}

export const StyledMenuItemAnchor = styled.a<StyledMenuItemAnchorProps>`
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
	border-radius: ${({ theme }): string => theme.tokens.ref.borderRadius.sm};
	cursor: ${({ disabled }): string => (disabled ? 'default' : 'pointer')};

	${({ theme, disabled }): FlattenSimpleInterpolation | undefined =>
		!disabled
			? css`
					&:hover {
						background: ${theme.tokens.color.background.neutral.secondary};
					}
			  `
			: undefined}
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

export const StyledCustomIcon = styled(SVG)`
	${styledIconCss}
`

export const StyledIcon = styled(Icon)`
	${styledIconCss}
`
