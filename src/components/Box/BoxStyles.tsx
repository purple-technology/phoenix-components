import styled from 'styled-components'
import {
	background,
	backgroundColor,
	flexbox,
	grid,
	layout,
	opacity,
	position
} from 'styled-system'

import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { textAlignCss } from '../common/Text/TextStyles'

export const StyledBox = styled.div`
	${layout}
	${flexbox}
	${grid}
	${background}
	${backgroundColor}
	${opacity}
	${position}
	${marginCss}
	${paddingCss}
	${textAlignCss}
`
