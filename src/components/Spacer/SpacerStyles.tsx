import styled from 'styled-components'

import { getSpacingCssValue } from '../../types/Spacing'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { SpacerProps } from '.'

export const StyledSpacer = styled.div<SpacerProps>`
	// Width
	${({ w, h, theme }): string => `
		width: ${getSpacingCssValue(theme, w, 'auto')};
		height: ${getSpacingCssValue(theme, h, 'auto')};
	`}

	display: ${({ w, mx, ml, mr }): string =>
		w || mx || ml || mr ? 'inline-block' : 'block'};

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
