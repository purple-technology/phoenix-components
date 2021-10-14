import React from 'react'
import styled from 'styled-components'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'

export interface TextAlignProps extends GenericComponentProps {
	center?: boolean
	right?: boolean
	justify?: boolean
}

const StyledTextAlign = styled.div<TextAlignProps>`
	text-align: ${({ center, right, justify }): string => {
		if (center) return 'center'
		if (right) return 'end'
		if (justify) return 'justify'
		return 'start'
	}};
`

export const TextAlign: React.FC<TextAlignProps> = ({
	testId = 'TextAlign',
	...props
}) => {
	return <StyledTextAlign data-testid={testId} {...props} />
}
