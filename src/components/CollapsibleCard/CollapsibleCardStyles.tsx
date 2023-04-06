import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Button } from '../Button'
import { Card } from '../Card'
import { Flex } from '../Flex'

export const Container = styled(Card)``

export const HeadingContainer = styled(Flex)<{ arrowReverse?: boolean }>`
	align-items: center;
	cursor: pointer;

	${({ arrowReverse }): FlattenSimpleInterpolation =>
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

export const ArrowContainer = styled(Flex)<{ collapsed: boolean }>`
	svg {
		transition: transform
			${(props): string => props.theme.tokens.duration.transition.base} ease-out;
		transform: ${(props): string => (!props.collapsed ? 'rotate(90deg)' : '')};
	}
`

export const ButtonStyle = styled(Button)`
	padding: 6px 9px;
`
