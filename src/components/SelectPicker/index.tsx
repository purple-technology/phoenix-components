import React, { useEffect, useState } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/Color'
import FormControlWarningError from '../common/FormControlWarningError'
import {
	Checkbox,
	Flex,
	Option,
	OptionDescription,
	OptionImage,
	OptionLabel,
	Wrapper
} from './SelectPickerStyles'

export interface SelectPickerProps extends GenericComponentProps {
	value: string | string[]
	onChange: (selected: string[] | string) => void
	options: Array<SelectPickerOption>
	name?: string
	multiSelect?: boolean
	error?: string | boolean
	warning?: string
	onMouseOver?: (event: React.MouseEvent) => void
	onMouseLeave?: (event: React.MouseEvent) => void
	colorTheme?: ColorTheme
	size?: ComponentSizeMediumLarge
	/** Determines the max-width and max-height property of the <img> tag */
	imageSize?: string
}

// Tried to unify with Select Option interface but difficult due to different value type.
export interface SelectPickerOption {
	value: string
	label: string
	description?: string
	image?: string
	isDisabled?: boolean
}

export const SelectPicker: React.FC<SelectPickerProps> = ({
	colorTheme = 'primary',
	size = 'medium',
	multiSelect = false,
	testId = 'SelectPicker',
	imageSize,
	options,
	name,
	onChange,
	value,
	error,
	warning,
	onMouseOver,
	onMouseLeave,
	className
}) => {
	const initialSelectedState = multiSelect && Array.isArray(value) ? value : []
	const [selected, setSelected] = useState(initialSelectedState)
	const [alreadyRendered, setAlreadyRendered] = useState(false)

	useEffect(() => {
		if (multiSelect && alreadyRendered) {
			return onChange(selected)
		}
		if (!alreadyRendered) setAlreadyRendered(true)
		// Only selected is intentionally used because the component loops otherwise
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selected])

	const onPickerClick = (option: SelectPickerOption): void => {
		if (!multiSelect) {
			onChange(option.value)
		} else if (selected.includes(option.value)) {
			const filter = selected.filter((val) => val !== option.value)
			setSelected(filter)
		} else {
			setSelected([...selected, option.value])
		}
	}

	const isSelected = (option: SelectPickerOption): boolean => {
		if (!multiSelect) {
			return value === option.value
		}
		return selected.includes(option.value)
	}

	const getOptions = (
		options: SelectPickerOption[]
	): React.ReactNode | null => {
		if (options) {
			return options.map((option) => (
				<Option
					multiSelect={multiSelect}
					key={option.value}
					checked={isSelected(option)}
					onClick={(): void => onPickerClick(option)}
					withImage={option.image}
					colorTheme={colorTheme}
					size={size}
					hasDescription={!!option.description}
					isDisabled={option.isDisabled}
				>
					<Checkbox
						colorTheme={colorTheme}
						size={size}
						checked={isSelected(option)}
					>
						<input
							type={multiSelect ? 'checkbox' : 'radio'}
							style={{ display: 'none' }}
							value={option.value}
							name={name}
							checked={isSelected(option)}
							readOnly
							disabled={option.isDisabled}
						/>
						<label />
					</Checkbox>
					<Flex>
						{option.image && (
							<OptionImage
								src={option.image}
								size={size}
								isDisabled={option.isDisabled}
								imageSize={imageSize}
							/>
						)}
						<OptionLabel>{option.label ?? option.value}</OptionLabel>
					</Flex>
					{option.description && (
						<OptionDescription
							checked={isSelected(option)}
							colorTheme={colorTheme}
							isDisabled={option.isDisabled}
						>
							{option.description}
						</OptionDescription>
					)}
				</Option>
			))
		}
		return null
	}

	const thisOnMouseOver = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void => {
		event.persist()
		onMouseOver?.(event)
	}

	const thisOnMouseLeave = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void => {
		event.persist()
		onMouseLeave?.(event)
	}

	return (
		<div className={className} data-testid={testId}>
			<Wrapper
				optionsLength={options.length}
				onMouseOver={thisOnMouseOver}
				onMouseLeave={thisOnMouseLeave}
				size={size}
			>
				{getOptions(options)}
			</Wrapper>
			<FormControlWarningError warning={warning} error={error} />
		</div>
	)
}
