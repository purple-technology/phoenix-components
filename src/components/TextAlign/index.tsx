import React from 'react'
import styled from 'styled-components'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'

export interface TextAlignProps
	extends GenericComponentProps,
		MarginProps,
		PaddingProps {
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

	${paddingCss}
	${marginCss}
`

export const TextAlign: React.FC<TextAlignProps> = ({
	testId = 'TextAlign',
	...props
}) => {
	return <StyledTextAlign data-testid={testId} {...props} />
}
