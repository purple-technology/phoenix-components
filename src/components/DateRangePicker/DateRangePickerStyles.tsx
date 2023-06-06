import styled from 'styled-components'

import { StyledDatePicker } from '../DatePicker/DatePickerStyles'

export const StyledDateRangePicker = styled(StyledDatePicker)`
	&.DateRangePicker
		.rdp-day_selected:not(.rdp-day_range_start):not(.rdp-day_range_end):not(.rdp-day_outside) {
		background-color: ${({ theme }): string =>
			theme.tokens.color.background.brand.secondary} !important;
		color: ${({ theme }): string => theme.tokens.color.text.brand.primary};
	}
	&.DateRangePicker .rdp-day {
		border-radius: 0 !important;
	}
	&.DateRangePicker .rdp-day_range_start {
		border-top-left-radius: 50% !important;
		border-bottom-left-radius: 50% !important;
	}
	&.DateRangePicker .rdp-day_range_end {
		border-top-right-radius: 50% !important;
		border-bottom-right-radius: 50% !important;
	}
	[dir='rtl'] &.DateRangePicker .rdp-day_range_start {
		border-top-right-radius: 50% !important;
		border-bottom-right-radius: 50% !important;
		border-top-left-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	[dir='rtl'] &.DateRangePicker .rdp-day_range_end {
		border-top-left-radius: 50% !important;
		border-bottom-left-radius: 50% !important;
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}
`
