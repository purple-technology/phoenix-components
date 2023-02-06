import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { TabListCommonProps } from './types'

export const StyledIndicator = styled.div<TabListCommonProps>`
	height: ${({ theme }): string => theme.tokens.tabs.borderWidth.tab.bottom};
	background: ${({ theme }): string => theme.tokens.color.text.brand.primary};
	position: absolute;
	bottom: 0;
	left: 12px;
	width: 50px;
	${({ theme, animate }): FlattenSimpleInterpolation | undefined =>
		animate
			? css`
					transition: transform ${theme.tokens.ref.transition.duration.base},
						width ${theme.tokens.ref.transition.duration.base};
			  `
			: undefined}
`
