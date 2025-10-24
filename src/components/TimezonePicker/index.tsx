import type React from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Select, type SelectProps } from '../Select'
import { getOptions } from './utils'

export type TimezonePickerProps = Omit<SelectProps, 'options'> &
	GenericComponentProps

export const TimezonePicker: React.FC<TimezonePickerProps> = ({
	testId = 'TimezonePicker',
	...props
}) => {
	const options = getOptions()
	return <Select options={options} testId={testId} {...props} />
}
