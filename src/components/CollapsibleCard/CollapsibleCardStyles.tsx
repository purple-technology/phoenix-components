import styled, { css, RuleSet } from 'styled-components'

import { Box } from '../Box'
import { Button } from '../Button'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { Flex } from '../Flex'

export const HeadingContainer = styled(Box)<
	{ arrowReverse?: boolean } & PaddingProps
>`
	align-items: center;
	display: flex;
	cursor: pointer;

	${({ arrowReverse }): RuleSet =>
		arrowReverse
			? css`
					width: 100%;
					flex-direction: row-reverse;
					justify-content: space-between;
			  `
			: css``}

	:hover > button {
		background-color: ${(props): string =>
			props.theme.tokens.color.background.neutral.secondaryInteraction};
	}
`

export const ArrowContainer = styled(Flex)<{
	collapsed: boolean
	iconRotationDeg: number
}>`
	svg {
		transition: transform
			${(props): string => props.theme.tokens.duration.transition.base} ease-out;
		transform: ${(props): string =>
			!props.collapsed ? `rotate(${props.iconRotationDeg}deg)` : ''};
	}
`

export const ButtonStyle = styled(Button)`
	padding: 6px 9px;
`
