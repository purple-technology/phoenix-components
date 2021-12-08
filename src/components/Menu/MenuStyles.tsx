import SVG from 'react-inlinesvg'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'
import { isPhoenixIconColored } from '../../utils/icons'
import { paddingCss } from '../common/Spacing/SpacingStyles'
import { Icon } from '../Icon'
import { MenuItemIconProps } from './MenuItemIcon'

export const StyledMenu = styled.ul`
	background: #fff;
	border-radius: 3px;
	list-style: none;
	margin: 0;
	min-width: 180px;
	text-align: start;

	${paddingCss}
`

export const StyledMenuItem = styled.li`
	list-style: none;
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
			? theme.$pc.colors.text.lightest
			: colorTheme
			? theme.$pc.colors[colorTheme].dark
			: theme.$pc.colors.text.dark};
	user-select: none;
	line-height: 20px;
	border-radius: ${({ theme }): string => theme.$pc.borderRadius['small']};
	cursor: ${({ disabled }): string => (disabled ? 'default' : 'pointer')};

	${({ theme, disabled }): FlattenSimpleInterpolation | undefined =>
		!disabled
			? css`
					&:hover {
						background: ${theme.$pc.colors['neutral'].light};
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
								? theme.$pc.colors.text.lightest
								: colorTheme
								? theme.$pc.colors[colorTheme].dark
								: theme.$pc.colors.text.dark
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
