import styled from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'
import { ComponentSizeSmallMedium } from '../../types/ComponentSize'
import { marginCss } from '../common/Spacing/SpacingStyles'

interface StyledTagProps {
	colorTheme: ColorTheme
	size: ComponentSizeSmallMedium
}

export const StyledTag = styled.div<StyledTagProps>`
	border-radius: 100px;
	background: ${({ colorTheme, theme }): string =>
		theme.$pc.colors[colorTheme].light};
	color: ${({ colorTheme, theme }): string =>
		theme.$pc.colors[colorTheme].dark};
	font-size: 12px;
	padding: ${({ size, theme }): string => theme.$pc.tag.padding[size]};
	display: inline-block;
	white-space: nowrap;
	text-align: center;
	cursor: default;

	${marginCss}
`
