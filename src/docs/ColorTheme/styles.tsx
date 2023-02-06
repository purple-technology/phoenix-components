import styled from 'styled-components'

import { ColorTheme } from '../../types/Color'

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
	secondary?: boolean
}

export const Color = styled.div<ColorProps>`
	width: 100%;
	height: 100%;
	background: ${({ theme, colorTheme, secondary }): string =>
		theme.tokens.color.background[colorTheme][
			secondary ? 'secondary' : 'primary'
		]};
`
