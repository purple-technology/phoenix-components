import SVG from 'react-inlinesvg'
import styled, { css } from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { isPhoenixIconColored } from '../../utils/icons'
import { paddingCss } from '../common/Spacing/SpacingStyles'
import { Icon } from '../Icon'

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
}

export const StyledMenuItemAnchor = styled.a<StyledMenuItemAnchorProps>`
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	padding: 6px 7px;
	color: ${({ theme, colorTheme }): string =>
		colorTheme
			? theme.$pc.colors[colorTheme].dark
			: theme.$pc.colors.text.dark};
	user-select: none;
	line-height: 20px;
	border-radius: ${({ theme }): string => theme.$pc.borderRadius['small']};
	&:hover {
		background: ${({ theme }): string => theme.$pc.colors['neutral'].light};
	}
`

export const styledIconCss = css<{ icon?: IconType | PhoenixIconsColored }>`
	width: 20px;
	height: 20px;
	margin-inline-end: 8px;

	${({ theme, icon }): string =>
		isPhoenixIconColored(icon)
			? ''
			: `
					path {
						fill: ${theme.$pc.colors.text.dark};
					}
			  `}
`

export const StyledCustomIcon = styled(SVG)`
	${styledIconCss}
`

export const StyledIcon = styled(Icon)`
	${styledIconCss}
`
