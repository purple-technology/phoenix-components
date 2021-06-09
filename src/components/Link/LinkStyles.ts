import SVG from 'react-inlinesvg'
import styled from 'styled-components'

import { ColorTheme } from '../../enum/ColorTheme'
import { ButtonIconAlignment } from '../common/Button/ButtonIconAlignment'

export const StyledLink = styled.a`
	text-decoration: underline;
	color: ${({ theme }): string => theme.colors[ColorTheme.PRIMARY].dark};
	cursor: pointer;
	&:hover,
	&:active,
	&:focus {
		text-decoration: none;
	}
`

interface IconProps {
	iconAlignment: ButtonIconAlignment
}

export const Icon = styled(SVG)<IconProps>`
	path {
		fill: ${({ theme }): string => theme.colors[ColorTheme.PRIMARY].dark};
	}
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	${({ iconAlignment }): string =>
		iconAlignment === ButtonIconAlignment.LEFT
			? 'margin-right: .4em;'
			: 'margin-left: .4em;'}
`
