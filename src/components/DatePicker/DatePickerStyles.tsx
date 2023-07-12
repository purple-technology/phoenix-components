import 'react-day-picker/dist/style.css'

import styled from 'styled-components'

import { CommonDatePicker } from '../common/DatePicker'

export const StyledDatePicker = styled(CommonDatePicker)`
	.rdp-cell,
	.rdp-head_cell,
	.rdp-day,
	.rdp-nav_button {
		width: 32px;
		height: 32px;
	}

	.rdp-day_selected {
		background-color: ${({ theme }): string =>
			theme.tokens.color.background.brand.primary};
	}

	.rdp-head_cell {
		color: ${({ theme }): string => theme.tokens.color.text.quaternary};
	}

	.rdp-caption {
		text-align: start;
	}

	.rdp-caption_label,
	.rdp-dropdown {
		font-size: ${({ theme }): string => theme.tokens.ref.fontSize.md};
		font-weight: normal;
	}

	.rdp-caption > div {
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
		background-color: transparent !important;
		opacity: 0.8;
	}

	.rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
		background-color: ${({ theme }): string =>
			theme.tokens.color.background.brand.secondary};
	}

	// Fix for custom arrows, otherwise whole component jumps
	.rdp-nav {
		height: 32px;
	}
`
