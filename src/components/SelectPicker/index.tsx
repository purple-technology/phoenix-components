import React, { useState, useEffect } from 'react'

import {
	Option,
	OptionImage,
	Label,
	Error,
	Wrapper,
	OptionDescription,
	Flex,
	Checkbox,
	OptionLabel
} from './SelectPickerStyles'
import { ColorTheme } from '../../theme/ColorTheme'
import { ComponentSize } from '../../enum/ComponentSize'

export interface SelectPickerProps {
	value: string | string[]
	onChange: (selected: string[] | string) => void
	options: Array<Option>
	name?: string
	multiSelect?: boolean
	error?: string | boolean
	onMouseOver?: (event: React.MouseEvent) => void
	onMouseLeave?: (event: React.MouseEvent) => void
	/** Determines the max-width property of the <img> tag */
	imageSize?: string
	colorTheme?: ColorTheme
	className?: string
	componentSize?: ComponentSize
}

interface Option {
	value: string
	label: string
	description?: string
	image?: string
}

const SelectPicker = ({
	options,
	name,
	onChange,
	value,
	multiSelect,
	error,
	onMouseOver,
	onMouseLeave,
	imageSize,
	colorTheme,
	componentSize,
	className
}: SelectPickerProps) => {
	const initialSelectedState = multiSelect && Array.isArray(value) ? value : []
	const [selected, setSelected] = useState(initialSelectedState)
	const [alreadyRendered, setAlreadyRendered] = useState(false)

	useEffect(() => {
		if (multiSelect && alreadyRendered) {
			return onChange(selected)
		}
		if (!alreadyRendered) setAlreadyRendered(true)
	}, [selected])

	const onPickerClick = (option: Option) => {
		if (!multiSelect) {
			return onChange(option.value)
		}

		if (selected.includes(option.value)) {
			const filter = selected.filter(val => val !== option.value)
			return setSelected(filter)
		}

		return setSelected([...selected, option.value])
	}

	const isSelected = (option: Option) => {
		if (!multiSelect) {
			return value === option.value
		}
		return selected.includes(option.value)
	}

	const getOptions = (options: Option[]) => {
		if (options) {
			return options.map(option => (
				<Option
					multiSelect={multiSelect}
					key={option.value}
					checked={isSelected(option)}
					onClick={() => onPickerClick(option)}
					withImage={option.image}
					colorTheme={colorTheme}
					componentSize={componentSize}
					hasDescription={!!option.description}
				>
					<Checkbox
						colorTheme={colorTheme}
						componentSize={componentSize}
						checked={isSelected(option)}
					>
						<input
							type="radio"
							style={{ display: 'none' }}
							value={option.value}
							name={name}
							checked={isSelected(option)}
						/>
						<label />
					</Checkbox>
					<Flex>
						{option.image && (
							<OptionImage src={option.image} imageSize={imageSize} />
						)}
						<OptionLabel>{option.label || option.value}</OptionLabel>
					</Flex>
					{option.description && (
						<OptionDescription
							checked={isSelected(option)}
							colorTheme={colorTheme}
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
	) => {
		event.persist()
		onMouseOver && onMouseOver(event)
	}

	const thisOnMouseLeave = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		event.persist()
		onMouseLeave && onMouseLeave(event)
	}

	return (
		<div className={className}>
			<Wrapper
				optionsLength={options.length}
				onMouseOver={thisOnMouseOver}
				onMouseLeave={thisOnMouseLeave}
			>
				{getOptions(options)}
			</Wrapper>
			{error && <Error>{error}</Error>}
		</div>
	)
}

SelectPicker.defaultProps = {
	imageSize: '40px',
	colorTheme: ColorTheme.PRIMARY,
	componentSize: ComponentSize.MEDIUM
}

export default SelectPicker
