import styled from 'styled-components'
import { display, DisplayProps } from 'styled-system'

import { CSSValue } from '../../types/CSSValue'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'

interface ImgProps extends DisplayProps {
	$width?: CSSValue
	$height?: CSSValue
	maxWidth?: CSSValue
	maxHeight?: CSSValue
}

export const StyledImage = styled.img<ImgProps>`
	${({ $width, $height, maxWidth, maxHeight }): string => {
		let styles = ''

		Object.entries({
			width: $width,
			height: $height,
			'max-width': maxWidth,
			'max-height': maxHeight
		}).map(([attr, value]) => {
			if (value) {
				styles += `
					${attr}: ${typeof value === 'number' ? `${value}px` : value};
				`
			}
		})

		return styles
	}}

	${display}
	${marginCss}
	${paddingCss}
`
