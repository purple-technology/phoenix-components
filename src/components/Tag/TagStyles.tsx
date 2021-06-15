import styled from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'

interface StyledTagProps {
	colorTheme: ColorTheme
}

export const StyledTag = styled.div<StyledTagProps>`
	border-radius: 100px;
	background: ${({ colorTheme, theme }): string =>
		theme.$pc.colors[colorTheme].light};
	color: ${({ colorTheme, theme }): string =>
		theme.$pc.colors[colorTheme].dark};
	font-size: 12px;
	padding: 6px 14px;
	display: inline-block;
`
