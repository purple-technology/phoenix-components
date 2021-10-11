import styled from 'styled-components'

import { Button } from '../Button'

export const HeadingContainerStyle = styled.header`
	display: flex;
	align-items: center;
	cursor: pointer;
	:hover > button {
		background-color: ${(props): string =>
			props.theme.$pc.colors.neutral.lightHoverBackground};
	}
`

export const ButtonStyle = styled(Button)<{ collapsed: boolean }>`
	svg {
		transition: transform
			${(props): string => props.theme.$pc.transitionDuration} ease-out;
		transform: ${(props): string => (!props.collapsed ? 'rotate(90deg)' : '')};
	}
`
