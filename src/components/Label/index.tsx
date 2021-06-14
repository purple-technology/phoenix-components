import React from 'react'
import styled from 'styled-components'

export interface LabelProps {
	htmlFor?: string
}

const StyledLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;
`

export const Label: React.FC<LabelProps> = (props) => {
	return <StyledLabel htmlFor={props.htmlFor}>{props.children}</StyledLabel>
}
