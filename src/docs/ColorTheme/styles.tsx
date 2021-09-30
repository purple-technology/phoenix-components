import styled from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'

export const Row = styled.div`
	display: flex;
`

export const Item = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	padding: 12px;
`

interface ColorProps {
	colorTheme: ColorTheme
	light?: boolean
}

export const Color = styled.div<ColorProps>`
	width: 100%;
	height: 100%;
	background: ${({ theme, colorTheme, light }): string =>
		theme.$pc.colors[colorTheme][light ? 'light' : 'dark']};
`
