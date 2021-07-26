import SVG from 'react-inlinesvg'
import styled from 'styled-components'

import { Spacing } from '../../types/Spacing'
import { marginCss } from '../common/Spacing/SpacingStyles'

interface StyledIconProps {
	size: Spacing | string | number
}

export const StyledIcon = styled(SVG)<StyledIconProps>`
	display: inline-block;
	${({ size, theme }): string => {
		if (Spacing.includes(size as unknown as Spacing)) {
			return `
				width: ${theme.$pc.spacing[size as unknown as Spacing]}px;
				height: ${theme.$pc.spacing[size as unknown as Spacing]}px;
			`
		} else if (typeof size === 'number') {
			return `
				width: ${size}px;
				height: ${size}px;
			`
		}
		return `
				width: ${size};
				height: ${size};
			`
	}}

	${marginCss}
`
