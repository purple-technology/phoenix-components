import React, { FocusEventHandler, ReactNode, useContext } from 'react'
import ReactSelect, {
	FormatOptionLabelMeta,
	Props as ReactSelectProps
} from 'react-select'
import { ThemeContext } from 'styled-components'

import FormControl, { FormControlProps } from '../FormControl'
import { useFormControl } from '../FormControl/useFormControl'
import ClearIndicator from './ClearIndicator'
import DropdownIndicator from './DropdownIndicator'
import MultiValueRemove from './MultiValueRemove'
import { getStyles } from './SelectStyles'
import ValueContainer from './ValueContainer'

export interface CommonSelectProps<
	Option extends SelectOption = SelectOption,
	IsMulti extends boolean = false
> extends FormControlProps {
	name?: string
	options?: Option[]
	onFocus?: FocusEventHandler<HTMLInputElement | HTMLSelectElement>
	onBlur?: FocusEventHandler<HTMLInputElement | HTMLSelectElement>
	/** Props to pass to react-select. These props will overwrite any other props from this component. See API docs here https://react-select.com/props */
	reactSelectProps?: Omit<ReactSelectProps<Option, IsMulti>, 'theme'>
	/** If true, disables search functionality which is enabled by default. */
	preventSearch?: boolean
}

export interface SelectOption {
	label: string
	value: string | number
	isDisabled?: boolean
}

interface InternalCommonSelectProps<
	Option extends SelectOption = SelectOption,
	IsMulti extends boolean = false
> extends CommonSelectProps<Option, IsMulti> {
	onChange: (
		option: IsMulti extends true ? readonly Option[] : Option | null
	) => void
	value?: Option[] | Option | null
	multiple?: IsMulti
	maxVisibleSelectedItems?: number
	formatOptionLabel?: (
		option: Option,
		labelMeta: FormatOptionLabelMeta<Option>
	) => ReactNode
}

const CommonSelect = <
	Option extends SelectOption = SelectOption,
	IsMulti extends boolean = false
>({
	size = 'md',
	testId,
	...props
}: InternalCommonSelectProps<Option, IsMulti>): React.ReactElement => {
	const { focused, thisOnFocus, thisOnBlur } = useFormControl<HTMLInputElement>(
		props.onFocus,
		props.onBlur
	)

	const theme = useContext(ThemeContext)
	const styles = getStyles<Option, IsMulti>(theme, size, props.multiple)

	const isFilled =
		(Array.isArray(props.value) && props.value.length > 0) ||
		(!Array.isArray(props.value) && !!props.value)

	const { components, ...reactSelectProps } = props.reactSelectProps ?? {}

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
			minimal={props.minimal}
			testId={testId}
		>
			<ReactSelect<Option, IsMulti>
				onFocus={thisOnFocus}
				onBlur={thisOnBlur}
				onChange={props.onChange}
				styles={styles}
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
					ValueContainer,
					...components
				}}
				isMulti={props.multiple}
				hideSelectedOptions={false}
				closeMenuOnSelect={!props.multiple}
				maxVisibleSelectedItems={props.maxVisibleSelectedItems}
				formatOptionLabel={props.formatOptionLabel}
				{...reactSelectProps}
			/>
		</FormControl>
	)
}

export default CommonSelect
