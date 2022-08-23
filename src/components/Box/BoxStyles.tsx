import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
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
import { CommonBoxProps } from './CommonBoxProps'

export const StyledBox = styled.div<CommonBoxProps>`
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

	${({ gap }): FlattenSimpleInterpolation | undefined =>
		gap
			? css`
					gap: ${gap};
			  `
			: undefined}
`
