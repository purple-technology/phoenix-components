import isMobile from 'is-mobile'
import React, { FocusEventHandler, useContext } from 'react'
import SVG from 'react-inlinesvg'
import { components, NamedProps as ReactSelectProps } from 'react-select'
import { IndicatorProps } from 'react-select/src/components/indicators'
import { GroupTypeBase, OptionTypeBase } from 'react-select/src/types'
import { ThemeContext } from 'styled-components'

import iconAngleDown from '../../icons/select-angle-down.svg'
import FormControl, { FormControlProps } from '../common/FormControl'
import { useFormControl } from '../common/FormControl/useFormControl'
import { SelectNative } from '../SelectNative'
import { getStyles, StyledSelect } from './SelectStyles'

export interface SelectProps extends FormControlProps {
	onChange: (option: Option | null) => void
	value?: Option | null
	name?: string
	options?: Option[]
	onFocus?: FocusEventHandler<HTMLSelectElement>
	onBlur?: FocusEventHandler<HTMLSelectElement>
	useNativeSelectOnMobile?: boolean
	reactSelectProps?: Omit<ReactSelectProps, 'theme'>
	preventSearch?: boolean
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

export const Select: React.FC<SelectProps> = ({
	size = 'medium',
	...props
}) => {
	const { focused, thisOnFocus, thisOnBlur } =
		useFormControl<HTMLSelectElement>(props.onFocus, props.onBlur)

	const theme = useContext(ThemeContext)
	const styles = getStyles(theme, size, props.RTL)

	if (props.useNativeSelectOnMobile && isMobile()) {
		return <SelectNative {...props} />
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
			size={size}
			disabled={props.disabled}
			filled={!!props.value}
			focused={focused}
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
				isRtl={props.RTL}
				options={props.options}
				name={props.name}
				value={props.value}
				components={{
					IndicatorSeparator: null,
					DropdownIndicator
				}}
				{...props.reactSelectProps}
			/>
		</FormControl>
	)
}
