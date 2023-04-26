import React from 'react'
import styled from 'styled-components'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
	GenericComponentProps &
	PaddingProps &
	MarginProps

const StyledLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;

	${paddingCss}
	${marginCss}
`

/**
 * `Label` component supports all props from `LabelHTMLAttributes<HTMLLabelElement>` interface.
 */
export const Label: React.FC<LabelProps> = ({ testId = 'Label', ...props }) => {
	return <StyledLabel data-testid={testId} {...props} />
}
