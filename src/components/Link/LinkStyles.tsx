import SVG from 'react-inlinesvg'
import styled, { css } from 'styled-components'

import { IconAlignment } from '../../types/IconAlignment'
import { Icon } from '../Icon'

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

interface StyledIconProps {
	$iconAlignment: IconAlignment
}

export const styledIconCss = css<StyledIconProps>`
	path {
		fill: ${({ theme }): string => theme.$pc.colors.primary.dark};
	}
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	${({ $iconAlignment }): string =>
		$iconAlignment === 'left' ? 'margin-right: .4em;' : 'margin-left: .4em;'}
`

export const StyledCustomIcon = styled(SVG)`
	${styledIconCss}
`

export const StyledIcon = styled(Icon)`
	${styledIconCss}
`
