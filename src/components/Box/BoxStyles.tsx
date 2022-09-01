import styled from 'styled-components'
import {
	background,
	border,
	color,
	flexbox,
	grid,
	layout,
	position
} from 'styled-system'

import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { textAlignCss } from '../common/Text/TextStyles'
import { GapProps } from './GapProps'
import { gapCss } from './GapStyles'

export const StyledBox = styled.div<GapProps>`
	${layout}
	${flexbox}
	${grid}
	${background}
	${color}
	${position}
	${marginCss}
	${paddingCss}
	${gapCss}
	${textAlignCss}
	${border}
`
