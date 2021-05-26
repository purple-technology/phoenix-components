import styled from 'styled-components'
import { ColorTheme } from '../../theme/ColorTheme'
import SVG from 'react-inlinesvg'

export const StyledLink = styled.a`
	text-decoration: underline;
	color: ${({ theme }) => theme.colors[ColorTheme.PRIMARY].dark};
	cursor: pointer;
	&:hover,
	&:active,
	&:focus {
		text-decoration: none;
	}
`

export const Icon = styled(SVG)``
