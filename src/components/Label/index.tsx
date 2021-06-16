import React from 'react'
import styled from 'styled-components'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const StyledLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;
`

/**
 * `Label` component supports all props from `LabelHTMLAttributes<HTMLLabelElement>` interface.
 */
export const Label: React.FC<LabelProps> = (props) => {
	return <StyledLabel htmlFor={props.htmlFor}>{props.children}</StyledLabel>
}
