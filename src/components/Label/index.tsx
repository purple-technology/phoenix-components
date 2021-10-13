import React from 'react'
import styled from 'styled-components'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
	GenericComponentProps

const StyledLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;
`

/**
 * `Label` component supports all props from `LabelHTMLAttributes<HTMLLabelElement>` interface.
 */
export const Label: React.FC<LabelProps> = ({ testId = 'Label', ...props }) => {
	return (
		<StyledLabel data-testid={testId} htmlFor={props.htmlFor}>
			{props.children}
		</StyledLabel>
	)
}
