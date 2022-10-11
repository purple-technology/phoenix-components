import React, { ChangeEventHandler, FocusEventHandler } from 'react'

import iconAngleDown from '../../images/angle-down.svg'
import FormControl, { FormControlProps } from '../common/FormControl'
import { StyledSelectNative } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'
import { SelectOption } from '../common/Select'
import {
	StyledAngleDown,
	StyledSelectNativeWrapper
} from './SelectNativeStyles'

export interface SelectNativeProps<Option extends SelectOption = SelectOption>
	extends FormControlProps {
	onChange: (option: Option | null) => void
	value?: Option | null
	name?: string
	options?: Option[]
	onFocus?: FocusEventHandler<HTMLSelectElement>
	onBlur?: FocusEventHandler<HTMLSelectElement>
}

export const SelectNative = <Option extends SelectOption = SelectOption>({
	testId = 'SelectNative',
	size = 'medium',
	options = [],
	...props
}: SelectNativeProps<Option>): React.ReactElement => {
	const { focused, thisOnFocus, thisOnBlur } =
		useFormControl<HTMLSelectElement>(props.onFocus, props.onBlur)

	const thisOnChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
		props.onChange(
			options.find((option) => option.value === e.target.value) ?? null
		)
	}

	return (
		<FormControl
			label={props.label}
			success={props.success}
			warning={props.warning}
			error={props.error}
			contentRight={props.contentRight}
			className={props.className}
			size={size}
			disabled={props.disabled}
			filled={!!props.value}
			focused={focused}
			minimal={props.minimal}
			testId={testId}
		>
			<StyledSelectNativeWrapper focused={focused} disabled={props.disabled}>
				<StyledSelectNative
					onFocus={thisOnFocus}
					onBlur={thisOnBlur}
					onChange={thisOnChange}
					value={props.value?.value}
					focused={focused}
					disabled={props.disabled}
					$size={size}
				>
					{/* Empty option must be added when no value is selected, otherwise
						floating label is overlapping with the first selected option. */}
					{!props.value && <option />}
					{options.map((option, index) => (
						<option
							key={index}
							value={option.value}
							disabled={option.isDisabled}
						>
							{option.label}
						</option>
					))}
				</StyledSelectNative>
				<StyledAngleDown src={iconAngleDown} disabled={props.disabled} />
			</StyledSelectNativeWrapper>
		</FormControl>
	)
}
