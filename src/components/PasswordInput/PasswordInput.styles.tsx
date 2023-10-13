import styled from 'styled-components'

import { Flex } from '../Flex'

export const IconContainer = styled(Flex)`
	cursor: pointer;

	&:hover path {
		transition: fill
			${({ theme }): string => theme.tokens.duration.transition.base};
		fill: ${({ theme }): string => theme.tokens.color.text.primary};
	}
`
