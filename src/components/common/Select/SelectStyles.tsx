import { CSSObjectWithLabel, StylesConfig } from 'react-select'
import { DefaultTheme } from 'styled-components'

import { getUnitlessNumber } from '../../../tokens/helpers'
import { Sizing } from '../../../types/Sizing'
import { SelectOption } from '.'

export const getStyles = <Option extends SelectOption, IsMulti extends boolean>(
	theme: DefaultTheme,
	size: Sizing,
	multiple?: boolean
): StylesConfig<Option, IsMulti> => ({
	container: (provided, state): CSSObjectWithLabel => ({
		...provided,
		width: '100%',
		'&:hover + fieldset': {
			borderColor: state.isDisabled
				? theme.tokens.color.border.secondary
				: state.isFocused
				? theme.tokens.color.border.focus
				: theme.tokens.color.border.primaryInteraction
		}
	}),
	control: (provided): CSSObjectWithLabel => ({
		...provided,
		borderWidth: '0px',
		boxShadow: 'none',
		background: theme.tokens.color.background.primary,
		minHeight: theme.tokens.inputButton.sizing.height[size],
		'&:hover': {
			borderColor: 'transparent'
		}
	}),

	valueContainer: (provided): CSSObjectWithLabel => ({
		...provided,
		// minus 2px because of margin in a child element (singleValue)
		padding: multiple
			? size === 'xs'
				? `3px ${getUnitlessNumber(theme.tokens.input.spacing.x) - 2}px`
				: `6px ${getUnitlessNumber(theme.tokens.input.spacing.x) - 2}px 4px`
			: size === 'xs'
			? `2px ${getUnitlessNumber(theme.tokens.input.spacing.x) - 2}px`
			: `0 ${getUnitlessNumber(theme.tokens.input.spacing.x) - 2}px 0`
	}),

	/** Dropdown arrow */
	dropdownIndicator: (provided, state): CSSObjectWithLabel => ({
		...provided,
		opacity: state.isDisabled ? 0.3 : 1,
		paddingInlineEnd: theme.tokens.input.spacing.x
	}),

	/** Dropdown popover */
	menu: (provided): CSSObjectWithLabel => ({
		...provided,
		zIndex: 2,
		backgroundColor: theme.tokens.color.background.primary
	}),

	/** Single line in a dropdown popover */
	option: (provided, state): CSSObjectWithLabel => {
		/** Color of the text */
		let color = theme.tokens.color.text.primary
		if (state.isDisabled) {
			color = theme.tokens.color.text.quaternary
		} else if (state.isSelected && !state.isMulti) {
			color = theme.tokens.color.text.brand.onPrimary
		}

		/** Background */
		let background = 'white'
		if (state.isSelected && !state.isMulti) {
			background = theme.tokens.color.background.brand.primary
		} else if (state.isFocused) {
			background = theme.tokens.color.background.brand.secondary
		}

		/** Hover background */
		let hoverBackground = theme.tokens.color.background.brand.secondary
		if (state.isDisabled) {
			hoverBackground = 'transparent'
		} else if (state.isSelected && !state.isMulti) {
			hoverBackground = theme.tokens.color.background.brand.primary
		}

		return {
			...provided,
			background,
			color,
			'&:hover': {
				background: hoverBackground,
				color
			}
		}
	},

	multiValue: (provided): CSSObjectWithLabel => ({
		...provided,
		backgroundColor: theme.tokens.color.background.neutral.secondary,
		borderRadius: theme.tokens.inputButton.borderRadius.xs
	}),

	multiValueLabel: (provided): CSSObjectWithLabel => ({
		...provided,
		paddingTop: theme.tokens.multiSelect.spacing.multiValueLabel.y[size],
		paddingInlineStart:
			theme.tokens.multiSelect.spacing.multiValueLabel.x[size],
		paddingInlineEnd: 0,
		paddingBottom: theme.tokens.multiSelect.spacing.multiValueLabel.y[size],
		fontSize: theme.tokens.multiSelect.fontSize.multiValueLabel[size]
	}),

	multiValueRemove: (provided): CSSObjectWithLabel => ({
		...provided,
		borderRadius: theme.tokens.inputButton.borderRadius.xs,
		paddingLeft: theme.tokens.multiSelect.spacing.multiValueLabel.x[size],
		paddingRight: theme.tokens.multiSelect.spacing.multiValueLabel.x[size],
		'&:hover': {
			background: theme.tokens.color.background.error.secondary,
			color: theme.tokens.color.text.error.primary
		}
	}),

	input: (provided): CSSObjectWithLabel => ({
		...provided,
		flex: '0 1 auto',
		color: theme.tokens.color.text.primary
	}),

	singleValue: (provided): CSSObjectWithLabel => ({
		...provided,
		lineHeight: 1.5,
		color: theme.tokens.color.text.primary
	})
})
