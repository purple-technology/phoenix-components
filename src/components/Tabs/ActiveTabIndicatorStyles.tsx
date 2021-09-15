import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

interface StyledIndicatorProps {
	animate: boolean
}

export const StyledIndicator = styled.div<StyledIndicatorProps>`
	height: 3px;
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
