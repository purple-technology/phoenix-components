import SVG from 'react-inlinesvg'
import styled from 'styled-components'

import { Spacing } from '../../types/Spacing'
import { marginCss } from '../common/Spacing/SpacingStyles'
import { isSpacing } from '../common/Spacing/utils'

interface StyledIconProps {
	$size: Spacing | string | number
}

export const StyledIconContainer = styled.span<StyledIconProps>`
	display: inline-flex;

	${({ $size, theme }): string => {
		if (isSpacing($size)) {
			return `
				width: ${theme.$pc.spacing[$size]}px;
				height: ${theme.$pc.spacing[$size]}px;
			`
		} else if (typeof $size === 'number') {
			return `
				width: ${$size}px;
				height: ${$size}px;
			`
		}
		return `
				width: ${$size};
				height: ${$size};
			`
	}}

	${marginCss}
`

export const StyledIcon = styled(SVG)`
	width: 100%;
	height: 100%;
`
