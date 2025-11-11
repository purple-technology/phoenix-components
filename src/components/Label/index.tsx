import type React from 'react'
import styled from 'styled-components'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
	GenericComponentProps &
	PaddingProps &
	MarginProps

const StyledLabel = styled.label<LabelProps>`
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
