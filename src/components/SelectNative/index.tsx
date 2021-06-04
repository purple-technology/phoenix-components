import React, { ChangeEventHandler, FocusEventHandler } from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import iconAngleDown from '../../icons/select-angle-down.svg'
import FormControl, { FormControlProps } from '../common/FormControl'
import { StyledSelectNative } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'
import { Option } from '../Select'
import {
	StyledAngleDown,
	StyledSelectNativeWrapper
} from './SelectNativeStyles'

export interface SelectNativeProps extends FormControlProps {
	onChange: (option: Option | null) => void
	value?: Option | null
	name?: string
	options?: Option[]
	onFocus?: FocusEventHandler<HTMLSelectElement>
	onBlur?: FocusEventHandler<HTMLSelectElement>
}

const SelectNative: React.FC<SelectNativeProps> = ({
	componentSize = ComponentSize.MEDIUM,
	options = [],
	...props
}) => {
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
			RTL={props.RTL}
			className={props.className}
			componentSize={componentSize}
			disabled={props.disabled}
			filled={!!props.value}
			focused={focused}
		>
			<StyledSelectNativeWrapper focused={focused} disabled={props.disabled}>
				<StyledSelectNative
					onFocus={thisOnFocus}
					onBlur={thisOnBlur}
					onChange={thisOnChange}
					value={props.value?.value}
					focused={focused}
					disabled={props.disabled}
					componentSize={componentSize}
					RTL={props.RTL}
				>
					<option />
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
				<StyledAngleDown
					src={iconAngleDown}
					$RTL={props.RTL}
					disabled={props.disabled}
				/>
			</StyledSelectNativeWrapper>
		</FormControl>
	)
}

SelectNative.defaultProps = {
	componentSize: ComponentSize.MEDIUM
}

export default SelectNative
