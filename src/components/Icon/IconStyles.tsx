import SVG from 'react-inlinesvg'
import styled, { css } from 'styled-components'

import { Spacing } from '../../types/Spacing'
import { marginCss } from '../common/Spacing/SpacingStyles'

interface StyledIconProps {
	$size: Spacing | string | number
}

const iconSize = css<StyledIconProps>`
	${({ $size, theme }): string => {
		if (Spacing.includes($size as unknown as Spacing)) {
			return `
				width: ${theme.$pc.spacing[$size as unknown as Spacing]}px;
				height: ${theme.$pc.spacing[$size as unknown as Spacing]}px;
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
`

export const StyledIconContainer = styled.span`
	display: inline-flex;

	${iconSize}
	${marginCss}
`

export const StyledIcon = styled(SVG)`
	${iconSize}
`
