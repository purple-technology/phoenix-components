import styled, { FlattenSimpleInterpolation } from 'styled-components'

import { right } from '../../utils/rtl'
import {
	getBaseStyles,
	getColorThemeStyles,
	getSizeRelatedStyles
} from '../common/Button/ButtonStyles'

export const Wrapper = styled.div`
	position: relative;
	display: inline-flex;
`

export const Button = styled.button`
	${(props): FlattenSimpleInterpolation => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles('sm', props.theme)}
	${(props): string => getColorThemeStyles(props.theme, 'neutral', false, true)}
	
	padding-inline-end: 36px;
	font-weight: ${({ theme }): string => theme.tokens.ref.fontWeight.regular};
`

export const Close = styled.button`
	${(props): FlattenSimpleInterpolation => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles('sm', props.theme)}
	${(props): string => getColorThemeStyles(props.theme, 'neutral', true)}
	
	position: absolute;
	top: 0;
	${right(0)}
	padding: 0 12px;
	width: 36px;
	background: transparent;
`
