import { ItemListRendererProps, ItemRendererProps } from '@blueprintjs/select'
import React, { FocusEventHandler, FunctionComponent, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import FormControl, {
	FormControlProps
} from '../../components/common/FormControl/FormControl'
import { StyledBPSelect } from '../../components/common/FormControl/FormControlStyles'
import { useFormControl } from '../../components/common/FormControl/useFormControl'
import { StyledBPPopover } from '../../components/Dropdown'
import Menu from '../../components/Menu'
import MenuItem from '../../components/Menu/MenuItem'
import { ComponentSize } from '../../enum/ComponentSize'

export interface SelectNativeProps extends FormControlProps {
	onChange: (option: Option) => void
	value?: Option | null
	name?: string
	options?: Option[]
	onFocus?: FocusEventHandler<HTMLInputElement>
	onBlur?: FocusEventHandler<HTMLInputElement>
	componentSize?: ComponentSize
}

export interface Option {
	label: string
	value: string | number
}

const SelectNative: FunctionComponent<SelectNativeProps> = (props) => {
	const { focused, thisOnFocus, thisOnBlur } = useFormControl<HTMLInputElement>(
		props.onFocus,
		props.onBlur
	)

	const theme = useContext(ThemeContext)

	return (
		<>
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
				<StyledBPSelect
					popoverProps={{
						popoverClassName: 'phoenix-popover-classname'
					}}
					items={props.options}
					itemRenderer={(item: Option, itemProps: ItemRendererProps) => (
						<>{item.label}</>
					)}
					onItemSelect={(
						item: Option,
						event?: React.SyntheticEvent<HTMLElement>
					) => props.onChange(item)}
					itemListRenderer={(itemListProps: ItemListRendererProps<Option>) => (
						<Menu>
							{itemListProps.items.map((item, index) => (
								<MenuItem key={index} text={item.label} />
							))}
						</Menu>
					)}
					inputProps={{
						placeholder: '',
						onFocus: thisOnFocus,
						onBlur: thisOnBlur
					}}
					focused={props.focused}
					disabled={props.disabled}
					componentSize={props.componentSize}
				>
					ahoj
					{/*<StyledBPPopover>*/}
					{/*	/!* children become the popover target; render value here *!/*/}
					{/*	{props.options}*/}
					{/*</StyledBPPopover>*/}
				</StyledBPSelect>
			</FormControl>
			{/*<StyledBPPopover>gaga</StyledBPPopover>*/}
		</>
	)
}

SelectNative.defaultProps = {
	componentSize: ComponentSize.MEDIUM,
	label: 'Select input'
}

export default SelectNative
