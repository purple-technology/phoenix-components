import styled, { css, type RuleSet } from 'styled-components'

import type { TabListCommonProps } from './types'

export const StyledIndicator = styled.div<TabListCommonProps>`
	height: ${({ theme }): string => theme.tokens.tabs.borderWidth.tab.bottom};
	background: ${({ theme }): string => theme.tokens.color.text.brand.primary};
	position: absolute;
	bottom: 0;
	left: 12px;
	width: 50px;
	${({ theme, animate }): RuleSet | undefined =>
		animate
			? css`
					transition: transform ${theme.tokens.duration.transition.base},
						width ${theme.tokens.duration.transition.base};
			  `
			: undefined}
`
