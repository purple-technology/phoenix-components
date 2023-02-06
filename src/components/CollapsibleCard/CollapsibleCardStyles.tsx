import styled from 'styled-components'

import { Button } from '../Button'
import { Spacer } from '../Spacer'

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`
export const HeadingContainer = styled(Spacer)`
	display: flex;
	align-items: center;
	cursor: pointer;

	:hover > button {
		background-color: ${(props): string =>
			props.theme.tokens.color.background.neutral.secondaryInteraction};
	}
`

export const ButtonStyle = styled(Button)<{ collapsed: boolean }>`
	padding: 6px 9px;
	svg {
		transition: transform
			${(props): string => props.theme.tokens.ref.transition.duration.base}
			ease-out;
		transform: ${(props): string => (!props.collapsed ? 'rotate(90deg)' : '')};
	}
`
