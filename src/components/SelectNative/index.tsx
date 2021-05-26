import React, {
	ChangeEventHandler,
	FocusEventHandler,
	FunctionComponent
} from 'react'
import { StyledSelectNative } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'
import { ComponentSize } from '../../enum/ComponentSize'
import FormControl, {
	FormControlProps
} from '../common/FormControl/FormControl'
import { Option } from '../Select'
import iconAngleDown from '../../icons/select-angle-down.svg'
import {
	StyledAngleDown,
	StyledSelectNativeWrapper
} from './SelectNativeStyles'

export interface SelectNativeProps extends FormControlProps {
	onChange: (option: Option) => void
	value?: Option | null
	name?: string
	options?: Option[]
	onFocus?: FocusEventHandler<HTMLSelectElement>
	onBlur?: FocusEventHandler<HTMLSelectElement>
}

const SelectNative: FunctionComponent<SelectNativeProps> = props => {
	const { focused, thisOnFocus, thisOnBlur } = useFormControl<
		HTMLSelectElement
	>(props.onFocus, props.onBlur)

	const thisOnChange: ChangeEventHandler<HTMLSelectElement> = e => {
		props.onChange &&
			props.onChange(
				props.options.find(option => option.value === e.target.value)
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
			componentSize={props.componentSize}
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
					componentSize={props.componentSize}
					RTL={props.RTL}
				>
					<option />
					{props.options.map((option, index) => (
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
					RTL={props.RTL}
					success={props.success}
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
