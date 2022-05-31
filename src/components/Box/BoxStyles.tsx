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

export const StyledBox = styled.div`
	${layout}
	${flexbox}
	${grid}
	${background}
	${color}
	${position}
	${marginCss}
	${paddingCss}
	${textAlignCss}
	${border}
`
