import styled from 'styled-components'

import { CommonDatePicker } from '../common/DatePicker'

export const StyledDatePicker = styled(CommonDatePicker)`
	--rdp-cell-size: 32px;
	--rdp-accent-color: ${({ theme }): string =>
		theme.tokens.color.background.brand.primary};
	--rdp-background-color: ${({ theme }): string =>
		theme.tokens.color.background.brand.secondary};
	--rdp-accent-color-dark: ${({ theme }): string =>
		theme.tokens.color.background.brand.primary};
	--rdp-background-color-dark: ${({ theme }): string =>
		theme.tokens.color.background.brand.primaryInteraction};

	.rdp-caption {
		text-align: start;
	}

	.rdp-caption > div {
		font-size: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	[dir='rtl'] & .rdp-nav {
		right: initial;
		left: 1.5em;
		transform: scaleX(-1);
	}

	.rdp-head_cell {
		color: ${({ theme }): string => theme.tokens.color.text.quaternary};
	}

	.rdp-day_today {
		color: ${({ theme }): string => theme.tokens.color.text.error.primary};
		font-weight: ${({ theme }): string => theme.tokens.ref.fontWeight.bold};
	}
	.rdp-day_selected:not(.rdp-day_disabled):not(.rdp-day_outside):hover {
		background-color: ${({ theme }): string =>
			theme.tokens.color.background.brand.primaryInteraction};
	}
	.rdp-button.rdp-nav_button:hover {
		background-color: transparent;
		opacity: 0.8;
	}

	// Fix for custom arrows, otherwise whole component jumps
	.rdp-nav {
		height: 32px;
	}
`
