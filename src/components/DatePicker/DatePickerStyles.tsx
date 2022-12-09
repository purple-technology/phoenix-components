import styled from 'styled-components'

import { CommonDatePicker } from '../common/DatePicker'
import imgArrowLeft from './icons/arrow-left.svg'
import imgArrowRight from './icons/arrow-right.svg'

export const StyledDatePicker = styled(CommonDatePicker)`
	.DayPicker-wrapper {
		padding-bottom: 0.75em;
	}

	.DayPicker-Caption {
		text-align: start;
	}

	.DayPicker-Caption > div {
		font-size: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 150px;
	}

	[dir='rtl'] & .DayPicker-NavButton {
		right: initial;
		left: 1.5em;
		transform: scaleX(-1);
	}

	.DayPicker-NavButton--prev {
		margin-inline-end: 2em;
		background-image: url(${imgArrowLeft});
	}

	.DayPicker-NavButton--next {
		background-image: url(${imgArrowRight});
	}

	.DayPicker-Weekday {
		color: ${({ theme }): string => theme.tokens.color.text.quaternary};
	}

	.DayPicker-Day--today {
		color: ${({ theme }): string => theme.tokens.color.text.error.primary};
		font-weight: ${({ theme }): string => theme.tokens.ref.fontWeight.bold};
	}

	.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
		background-color: ${({ theme }): string =>
			theme.tokens.color.background.brand.primary};
		color: #fff;
	}

	.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
		background-color: ${({ theme }): string =>
			theme.tokens.color.background.brand.primaryInteraction};
	}

	&&:not(.DayPicker--interactionDisabled)
		.DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
		background-color: ${({ theme }): string =>
			theme.tokens.color.background.brand.secondary};
	}
`
