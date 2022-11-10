import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { TabListCommonProps } from './types'

export const StyledIndicator = styled.div<TabListCommonProps>`
	height: ${({ theme, size }): number =>
		theme.$pc.tabs.size[size ?? 'medium'] < 14 ? 2 : 3}px;
	background: ${({ theme }): string => theme.$pc.colors.primary.dark};
	position: absolute;
	bottom: 0;
	left: 12px;
	width: 50px;
	${({ theme, animate }): FlattenSimpleInterpolation | undefined =>
		animate
			? css`
					transition: transform ${theme.$pc.transitionDuration},
						width ${theme.$pc.transitionDuration};
			  `
			: undefined}
`
