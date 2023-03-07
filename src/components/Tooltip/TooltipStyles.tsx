import Tippy from '@tippyjs/react'
import styled from 'styled-components'

import { getBoxShadow } from '../../tokens/helpers'

export const StyledTippy = styled(Tippy)`
	font-size: 12px;
	background: ${({ theme }): string => theme.tokens.tooltip.color.background};
	box-shadow: ${({ theme }): string =>
		getBoxShadow(theme.tokens.tooltip.boxShadow)};

	.tippy-content {
		padding: 8px 12px;
	}

	.tippy-arrow {
		color: ${({ theme }): string => theme.tokens.tooltip.color.background};
	}
`
