import { TabList as ReactTabsTabList } from 'react-tabs'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

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

interface StyledLinkProps {
	animate?: boolean
	disabled?: boolean
	selected?: boolean
}

export const StyledLink = styled.a<StyledLinkProps>`
	display: block;
	height: 40px;
	line-height: 40px;
	padding: 0 12px;
	text-decoration: none;
	color: ${({ theme, disabled }): string => {
		return disabled
			? theme.$pc.colors.text.lightest
			: theme.$pc.colors.text.darkest
	}};
	font-weight: ${({ selected }): number => (selected ? 500 : 400)};
	cursor: ${({ disabled }): string => (disabled ? 'default' : 'pointer')};
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
