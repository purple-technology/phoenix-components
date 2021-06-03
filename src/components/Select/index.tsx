import React, { FocusEventHandler, useContext } from 'react'
import SVG from 'react-inlinesvg'
import { components } from 'react-select'
import { IndicatorProps } from 'react-select/src/components/indicators'
import { GroupTypeBase, OptionTypeBase } from 'react-select/src/types'
import { ThemeContext } from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'
import iconAngleDown from '../../icons/select-angle-down.svg'
import FormControl, { FormControlProps } from '../common/FormControl'
import { useFormControl } from '../common/FormControl/useFormControl'
import { getStyles, StyledSelect } from './SelectStyles'

export interface SelectProps extends FormControlProps {
	onChange: (option: Option | null) => void
	value?: Option | null
	name?: string
	options?: Option[]
	onFocus?: FocusEventHandler<HTMLSelectElement>
	onBlur?: FocusEventHandler<HTMLSelectElement>
}

export type OptionValue = string | number

export interface Option {
	label: string
	value: OptionValue
	isDisabled?: boolean
}

const DropdownIndicator = <
	OptionType extends OptionTypeBase,
	IsMulti extends boolean,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
	props: IndicatorProps<OptionType, IsMulti, GroupType>
): React.ReactNode => {
	return (
		<components.DropdownIndicator {...props}>
			<SVG src={iconAngleDown} className={props.className} />
		</components.DropdownIndicator>
	)
}

const Select: React.FC<SelectProps> = ({
	componentSize = ComponentSize.MEDIUM,
	...props
}) => {
	const { focused, thisOnFocus, thisOnBlur } =
		useFormControl<HTMLSelectElement>(props.onFocus, props.onBlur)

	const theme = useContext(ThemeContext)
	const styles = getStyles(theme, componentSize, props.RTL)

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
			<StyledSelect
				options={props.options}
				onChange={props.onChange}
				onFocus={thisOnFocus}
				onBlur={thisOnBlur}
				styles={styles}
				focused={focused}
				disabled={props.disabled}
				placeholder=""
				components={{
					DropdownIndicator
				}}
			/>
		</FormControl>
	)
}

Select.defaultProps = {
	componentSize: ComponentSize.MEDIUM
}

export default Select
