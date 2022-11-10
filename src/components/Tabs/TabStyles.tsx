import { TabList as ReactTabsTabList } from 'react-tabs'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { TabCommonProps } from './types'

export const StyledTabs = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0 -12px;
	position: relative;
`

export const StyledTabList = styled(ReactTabsTabList)`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0 -12px;
	position: relative;
`

export const StyledLink = styled.a<TabCommonProps>`
	display: block;
	height: ${({ theme, size }): number =>
		theme.$pc.tabs.size[size ?? 'medium'] * 2 + 12}px;
	line-height: ${({ theme, size }): number =>
		theme.$pc.tabs.size[size ?? 'medium'] * 2 + 12}px;
	padding: 0 12px;
	text-decoration: none;
	font-weight: ${({ selected, theme }): number =>
		selected ? theme.$pc.fontWeight.bold : theme.$pc.fontWeight.regular};
	font-size: ${({ theme, size }): number =>
		theme.$pc.tabs.size[size ?? 'medium']}px;
	cursor: ${({ disabled }): string => (disabled ? 'default' : 'pointer')};

	${({ theme, disabled, selected }): FlattenSimpleInterpolation => {
		if (disabled) {
			return css`
				color: ${theme.$pc.colors.text.lightest};
			`
		}
		if (selected) {
			return css`
				color: ${theme.$pc.colors.primary.dark};
			`
		}
		return css`
			color: ${theme.$pc.colors.text.darkest};
			&:hover {
				color: ${theme.$pc.colors.primary.dark};
			}
		`
	}}

	${({ theme, selected, animate }): FlattenSimpleInterpolation | undefined => {
		if (!animate && selected) {
			return css`
				position: relative;
				&:before {
					content: '';
					display: block;
					position: absolute;
					bottom: 0;
					left: 12px;
					height: 3px;
					width: calc(100% - 24px);
					background: ${theme.$pc.colors.primary.dark};
				}
			`
		}
	}}
`
