import React, { useState } from 'react'

import TimezonePickerComponent, { TimezonePickerProps } from './index'

export default {
	title: 'components / TimezonePicker',
	component: TimezonePickerComponent
}

export const TimezonePicker = (args: TimezonePickerProps) => {
	const [value, setValue] = useState(args.value)

	return (
		<TimezonePickerComponent
			{...args}
			value={value}
			onChange={(e) => setValue(e)}
		/>
	)
}
TimezonePicker.args = {
	label: 'Pick a timezone'
}
