import styled from 'styled-components'
import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'

export const StyledMenu = styled.ul`
	background: #fff;
	border-radius: 3px;
	list-style: none;
	margin: 0;
	min-width: 180px;
	padding: 5px;
	text-align: left;
`

export const StyledMenuItem = styled.li``

export const StyledMenuItemAnchor = styled.a`
	text-decoration: none;
	cursor: pointer;
	padding: 5px 7px;
	color: ${({ theme }) => theme.colors.text};
	user-select: none;
	display: block;
	border-radius: ${({ theme }) => theme.borderRadius[ComponentSize.SMALL]};
	&:hover {
		background: ${({ theme }) => theme.colors[ColorTheme.NEUTRAL].light};
	}
`
