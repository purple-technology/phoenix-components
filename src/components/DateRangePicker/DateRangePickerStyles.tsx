import styled from 'styled-components'

import { StyledDatePicker } from '../DatePicker/DatePickerStyles'

export const StyledDateRangePicker = styled(StyledDatePicker)`
	&.DateRangePicker
		.DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
		background-color: ${({ theme }): string =>
			theme.tokens.color.background.brand.secondary} !important;
		color: ${({ theme }): string => theme.tokens.color.text.brand.primary};
	}
	&.DateRangePicker .DayPicker-Day {
		border-radius: 0 !important;
	}
	&.DateRangePicker .DayPicker-Day--start {
		border-top-left-radius: 50% !important;
		border-bottom-left-radius: 50% !important;
	}
	&.DateRangePicker .DayPicker-Day--end {
		border-top-right-radius: 50% !important;
		border-bottom-right-radius: 50% !important;
	}
	[dir='rtl'] &.DateRangePicker .DayPicker-Day--start {
		border-top-right-radius: 50% !important;
		border-bottom-right-radius: 50% !important;
		border-top-left-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	[dir='rtl'] &.DateRangePicker .DayPicker-Day--end {
		border-top-left-radius: 50% !important;
		border-bottom-left-radius: 50% !important;
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}
`
