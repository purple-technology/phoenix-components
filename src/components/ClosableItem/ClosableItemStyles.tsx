import styled from 'styled-components'

import { getSizeRelatedStyles } from '../common/Button/ButtonStyles'

export const Wrapper = styled.div`
	position: relative;
	display: inline-flex;
`

export const Content = styled.div`
	${(props): string => getSizeRelatedStyles('small', props.theme)}

	display: flex;
	width: 100%;
	align-items: center;
	cursor: default;
	background: ${({ theme }): string => theme.$pc.colors.neutral.light};
	color: ${({ theme }): string => theme.$pc.colors.text.darkest};
	padding-inline-end: 36px;
`
