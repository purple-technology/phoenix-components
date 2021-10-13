import React, { FocusEventHandler, useContext } from 'react'
import {
	FormatOptionLabelMeta,
	NamedProps as ReactSelectProps,
	OptionTypeBase
} from 'react-select'
import { ThemeContext } from 'styled-components'

import FormControl, { FormControlProps } from '../FormControl'
import { useFormControl } from '../FormControl/useFormControl'
import ClearIndicator from './ClearIndicator'
import DropdownIndicator from './DropdownIndicator'
import MultiValueRemove from './MultiValueRemove'
import { getStyles, StyledSelect } from './SelectStyles'
import ValueContainer from './ValueContainer'

export interface CommonSelectProps extends FormControlProps {
	name?: string
	options?: SelectOption[]
	onFocus?: FocusEventHandler<HTMLSelectElement>
	onBlur?: FocusEventHandler<HTMLSelectElement>
	/** Props to pass to react-select. These props will overwrite any other props from this component. See API docs here https://react-select.com/props */
	reactSelectProps?: Omit<ReactSelectProps, 'theme'>
	/** If true, disables search functionality which is enabled by default. */
	preventSearch?: boolean
}

export interface SelectOption extends OptionTypeBase {
	label: string
	value: string | number
	isDisabled?: boolean
}

interface InternalCommonSelectProps extends CommonSelectProps {
	onChange:
		| ((option: SelectOption[]) => void)
		| ((option: SelectOption | null) => void)
	value?: SelectOption[] | SelectOption | null
	multiple?: boolean
	maxVisibleSelectedItems?: number
	formatOptionLabel?: <
		OptionType extends SelectOption,
		IsMulti extends boolean
	>(
		option: OptionType,
		labelMeta: FormatOptionLabelMeta<OptionType, IsMulti>
	) => React.ReactNode
}

const CommonSelect: React.FC<InternalCommonSelectProps> = ({
	size = 'medium',
	testId,
	...props
}) => {
	const { focused, thisOnFocus, thisOnBlur } =
		useFormControl<HTMLSelectElement>(props.onFocus, props.onBlur)

	const theme = useContext(ThemeContext)
	const styles = getStyles(theme, size)

	const isFilled =
		(Array.isArray(props.value) && props.value.length > 0) ||
		(!Array.isArray(props.value) && !!props.value)

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
			filled={isFilled}
			focused={focused}
			testId={testId}
		>
			<StyledSelect
				onFocus={thisOnFocus}
				onBlur={thisOnBlur}
				onChange={props.onChange}
				styles={styles}
				focused={focused}
				isDisabled={props.disabled}
				isSearchable={!props.preventSearch}
				placeholder=""
				options={props.options}
				name={props.name}
				value={props.value}
				components={{
					IndicatorSeparator: null,
					DropdownIndicator,
					ClearIndicator,
					MultiValueRemove,
					ValueContainer
				}}
				isMulti={props.multiple}
				hideSelectedOptions={false}
				closeMenuOnSelect={!props.multiple}
				maxVisibleSelectedItems={props.maxVisibleSelectedItems}
				formatOptionLabel={props.formatOptionLabel}
				{...props.reactSelectProps}
			/>
		</FormControl>
	)
}

export default CommonSelect
