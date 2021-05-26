import React, { FocusEventHandler, FunctionComponent, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { components } from 'react-select'
import SVG from 'react-inlinesvg'

import { useFormControl } from '../common/FormControl/useFormControl'
import { ComponentSize } from '../../enum/ComponentSize'
import FormControl, {
	FormControlProps
} from '../common/FormControl/FormControl'
import { getStyles, StyledSelect } from './SelectStyles'
import iconAngleDown from '../../icons/select-angle-down.svg'
import { IndicatorProps } from 'react-select/src/components/indicators'
import { GroupTypeBase, OptionTypeBase } from 'react-select/src/types'

export interface SelectProps extends FormControlProps {
	onChange: (option: Option) => void
	value?: Option | null
	name?: string
	options?: Option[]
	onFocus?: FocusEventHandler<HTMLSelectElement>
	onBlur?: FocusEventHandler<HTMLSelectElement>
}

export interface Option {
	label: string
	value: string | number
	isDisabled?: boolean
	[key: string]: any
}

const DropdownIndicator = <
	OptionType extends OptionTypeBase,
	IsMulti extends boolean,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
	props: IndicatorProps<OptionType, IsMulti, GroupType>
) => {
	return (
		<components.DropdownIndicator {...props}>
			<SVG src={iconAngleDown} className={props.className} />
		</components.DropdownIndicator>
	)
}

const Select: FunctionComponent<SelectProps> = props => {
	const { focused, thisOnFocus, thisOnBlur } = useFormControl<
		HTMLSelectElement
	>(props.onFocus, props.onBlur)

	const theme = useContext(ThemeContext)
	const styles = getStyles(theme, props.componentSize, props.RTL)

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
