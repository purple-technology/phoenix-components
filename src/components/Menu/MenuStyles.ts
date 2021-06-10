import SVG from 'react-inlinesvg'
import styled from 'styled-components'

import { ColorTheme } from '../../enum/ColorTheme'
import { ComponentSize } from '../../enum/ComponentSize'

export const StyledMenu = styled.ul`
	background: #fff;
	border-radius: 3px;
	list-style: none;
	margin: 0;
	min-width: 180px;
	padding: 5px;
	text-align: left;
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
	color: ${({ theme }): string => theme.$pc.colors.text};
	user-select: none;
	font-size: 12px;
	line-height: 20px;
	border-radius: ${({ theme }): string =>
		theme.$pc.borderRadius[ComponentSize.SMALL]};
	&:hover {
		background: ${({ theme }): string =>
			theme.$pc.colors[ColorTheme.NEUTRAL].light};
	}
`

export const Icon = styled(SVG)`
	width: 20px;
	height: 20px;
	margin-right: 8px;

	path {
		fill: ${({ theme }): string => theme.$pc.colors.text};
	}
`
