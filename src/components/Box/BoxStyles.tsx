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

import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { TextAlignProp } from '../common/Text/CommonTextProps'
import { textAlignCss } from '../common/Text/TextStyles'
import { GapProps } from './GapProps'
import { gapCss } from './GapStyles'

export const StyledBox = styled.div<
	GapProps & MarginProps & PaddingProps & TextAlignProp
>`
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
