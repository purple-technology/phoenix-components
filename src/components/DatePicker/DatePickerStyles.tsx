import styled from 'styled-components'

import { CommonDatePicker } from '../common/DatePicker'
import imgArrowLeft from './icons/arrow-left.svg'
import imgArrowRight from './icons/arrow-right.svg'

export const StyledDatePicker = styled(CommonDatePicker)`
	.DayPicker-wrapper {
		padding-bottom: 0.75em;
	}

	.DayPicker-Caption > div {
		font-size: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 150px;
	}

	.DayPicker-NavButton--prev {
		margin-right: 2em;
		background-image: url(${imgArrowLeft});
	}

	.DayPicker-NavButton--next {
		background-image: url(${imgArrowRight});
	}

	.DayPicker-Weekday {
		color: ${({ theme }): string => theme.$pc.colors.text.lightest};
	}

	.DayPicker-Day--today {
		color: ${({ theme }): string => theme.$pc.colors.error.dark};
		font-weight: 700;
	}

	.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
		background-color: ${({ theme }): string => theme.$pc.colors.primary.dark};
		color: #fff;
	}

	.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
		background-color: ${({ theme }): string =>
			theme.$pc.colors.primary.darkHoverBackground};
	}

	&&:not(.DayPicker--interactionDisabled)
		.DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
		background-color: ${({ theme }): string => theme.$pc.colors.primary.light};
	}
`
