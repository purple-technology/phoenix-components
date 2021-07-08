import styled from 'styled-components'

import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { getSpacingCssValue } from '../common/Spacing/utils'
import { SpacerProps } from '.'

export const StyledSpacer = styled.div<SpacerProps>`
	// Width
	${({ w, h, theme }): string => `
		width: ${getSpacingCssValue(theme, w, 'auto')};
		height: ${getSpacingCssValue(theme, h, 'auto')};
	`}

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
