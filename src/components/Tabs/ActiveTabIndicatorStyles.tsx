import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

interface StyledIndicatorProps {
	animate: boolean
}

export const StyledIndicator = styled.div<StyledIndicatorProps>`
	height: 2px;
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
