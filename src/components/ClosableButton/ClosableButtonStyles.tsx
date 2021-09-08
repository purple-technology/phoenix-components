import styled from 'styled-components'

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
	${(props): string => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles('small', props.theme)}
	${(props): string => getColorThemeStyles(props.theme, 'neutral', false, true)}
	
	padding-inline-end: 36px;
	font-weight: 400;
`

export const Close = styled.button`
	${(props): string => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles('small', props.theme)}
	${(props): string => getColorThemeStyles(props.theme, 'neutral', true)}
	
	position: absolute;
	top: 0;
	${right(0)}
	padding: 0 12px;
	width: 36px;
	background: transparent;
`
