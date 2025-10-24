import { TabList as ReactTabsTabList } from 'react-tabs'
import styled, { css, RuleSet } from 'styled-components'

import { getUnitlessNumber } from '../../tokens/helpers'
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
		getUnitlessNumber(theme.tokens.ref.fontSize[size ?? 'md']) * 2 + 12}px;
	line-height: ${({ theme, size }): number =>
		getUnitlessNumber(theme.tokens.ref.fontSize[size ?? 'md']) * 2 + 12}px;
	padding: 0 12px;
	text-decoration: none;
	font-weight: ${({ selected, theme }): string =>
		selected
			? theme.tokens.ref.fontWeight.bold
			: theme.tokens.ref.fontWeight.regular};
	font-size: ${({ theme, size }): string =>
		theme.tokens.ref.fontSize[size ?? 'md']};
	cursor: ${({ disabled }): string => (disabled ? 'default' : 'pointer')};

	color: ${({ theme, disabled, selected }): string => {
		return disabled
			? theme.tokens.color.text.quaternary
			: selected
				? theme.tokens.color.text.brand.primary
				: theme.tokens.color.text.primary
	}};
	${({ theme, disabled, selected }): RuleSet | undefined => {
		if (!disabled && !selected) {
			return css`
				&:hover {
					color: ${theme.tokens.color.text.brand.primary};
				}
			`
		}
	}}

	${({ theme, selected, animate }): RuleSet | undefined => {
		if (!animate && selected) {
			return css`
				position: relative;
				&:before {
					content: '';
					display: block;
					position: absolute;
					bottom: 0;
					left: 12px;
					height: ${theme.tokens.tabs.borderWidth.tab.bottom};
					width: calc(100% - 24px);
					background: ${theme.tokens.color.text.brand.primary};
				}
			`
		}
	}}
`
