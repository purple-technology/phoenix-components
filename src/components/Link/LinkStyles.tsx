import SVG from 'react-inlinesvg'
import styled from 'styled-components'

import { ButtonIconAlignment } from '../common/Button/ButtonIconAlignment'

export const StyledLink = styled.a`
	text-decoration: underline;
	color: ${({ theme }): string => theme.$pc.colors.primary.dark};
	cursor: pointer;
	&:hover,
	&:active,
	&:focus {
		text-decoration: none;
	}
`

interface IconProps {
	$iconAlignment: ButtonIconAlignment
}

export const Icon = styled(SVG)<IconProps>`
	path {
		fill: ${({ theme }): string => theme.$pc.colors.primary.dark};
	}
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	${({ $iconAlignment }): string =>
		$iconAlignment === 'left' ? 'margin-right: .4em;' : 'margin-left: .4em;'}
`
