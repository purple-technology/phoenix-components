import styled, { RuleSet } from 'styled-components'

import { getSizeRelatedStyles } from '../common/Button/ButtonStyles'

export const Wrapper = styled.div`
	position: relative;
	display: inline-flex;
`

export const Content = styled.div`
	${(props): RuleSet => getSizeRelatedStyles('sm', props.theme)}

	display: flex;
	width: 100%;
	align-items: center;
	cursor: default;
	background: ${({ theme }): string =>
		theme.tokens.color.background.neutral.secondary};
	color: ${({ theme }): string => theme.tokens.color.text.primary};
	padding-inline-end: 36px;
`
