import SVG from 'react-inlinesvg'
import styled, { css } from 'styled-components'

import { paddingCss } from '../common/Spacing/SpacingStyles'
import { Icon } from '../Icon'

export const StyledMenu = styled.ul`
	background: #fff;
	border-radius: 3px;
	list-style: none;
	margin: 0;
	min-width: 180px;
	text-align: left;

	${paddingCss}
`

export const StyledMenuDivider = styled.div`
	margin: 4px 0;
	width: 100%;
	height: 1px;
	background: ${({ theme }): string => theme.$pc.colors.borderHr};
`

export const StyledMenuItem = styled.li``

export const StyledMenuItemAnchor = styled.a`
	display: flex;
	text-decoration: none;
	cursor: pointer;
	padding: 6px 7px;
	color: ${({ theme }): string => theme.$pc.colors.text.dark};
	user-select: none;
	line-height: 20px;
	border-radius: ${({ theme }): string => theme.$pc.borderRadius['small']};
	&:hover {
		background: ${({ theme }): string => theme.$pc.colors['neutral'].light};
	}
`

export const styledIconCss = css`
	width: 20px;
	height: 20px;
	margin-right: 8px;

	path {
		fill: ${({ theme }): string => theme.$pc.colors.text.dark};
	}
`

export const StyledCustomIcon = styled(SVG)`
	${styledIconCss}
`

export const StyledIcon = styled(Icon)`
	${styledIconCss}
`
