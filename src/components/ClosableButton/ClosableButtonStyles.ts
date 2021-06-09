import styled from 'styled-components'

import { ColorTheme } from '../../enum/ColorTheme'
import { ComponentSize } from '../../enum/ComponentSize'
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
	${(props): string => getSizeRelatedStyles(ComponentSize.SMALL, props.theme)}
	${(props): string =>
		getColorThemeStyles(props.theme, ColorTheme.NEUTRAL, false, true)}
	
	padding-right: 36px;
	font-weight: 400;
`

export const Close = styled.button`
	${(props): string => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles(ComponentSize.SMALL, props.theme)}
	${(props): string => getColorThemeStyles(props.theme, ColorTheme.NEUTRAL, true)}
	
	position: absolute;
	top: 0;
	right: 0;
	padding: 0 12px;
	width: 36px;
	background: transparent;
`
