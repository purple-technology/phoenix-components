import styled from 'styled-components'

import {
	getBaseStyles,
	getColorThemeStyles,
	getSizeRelatedStyles
} from '../common/Button/ButtonStyles'

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
	padding-right: 36px;
`

export const Close = styled.button`
	${(props): string => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles('small', props.theme)}
	${(props): string => getColorThemeStyles(props.theme, 'neutral', true)}
	
	position: absolute;
	top: 0;
	right: 0;
	padding: 0 12px;
	width: 36px;
	background: transparent;
`
