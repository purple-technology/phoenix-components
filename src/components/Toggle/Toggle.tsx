import React, { InputHTMLAttributes } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/Color'
import CheckboxRadio from '../common/CheckboxRadio'
import {
	FormControlErrorType,
	FormControlWarningType
} from '../common/FormControl/types'
import FormControlWarningError from '../common/FormControlWarningError'
import { StyledToggle } from './Toggle.styles'

export interface ToggleProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
		GenericComponentProps {
	colorTheme?: ColorTheme
	label?: React.ReactNode
	/** Show yellow warning text and icon under the input */
	warning?: FormControlWarningType
	/** Show red error text and icon under the input */
	error?: FormControlErrorType
}

export const Toggle: React.FC<ToggleProps> = ({
	colorTheme = 'brand',
	className,
	warning,
	error,
	testId = 'Toggle',
	...props
}) => {
	return (
		<>
			<StyledToggle
				className={className}
				colorTheme={colorTheme}
				data-testid={testId}
				warning={!!warning}
				error={!!error}
			>
				<CheckboxRadio type="checkbox" {...props} />
			</StyledToggle>
			<FormControlWarningError warning={warning} error={error} />
		</>
	)
}
