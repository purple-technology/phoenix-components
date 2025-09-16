import React from 'react'

import {
	FormControlErrorType,
	FormControlWarningType
} from '../FormControl/types'
import { StyledIcon, WarningErrorText } from './FormControlWarningErrorStyles'

interface FormControlWarningErrorProps {
	/** Show yellow warning text and icon under the input */
	warning?: FormControlWarningType
	/** Show red error text and icon under the input */
	error?: FormControlErrorType
}

const FormControlWarningError: React.FC<FormControlWarningErrorProps> = ({
	warning,
	error
}) => (
	<>
		{!!warning && (
			<WarningErrorText colorTheme={'warning'}>
				<StyledIcon icon="exclamation-warning" $size="s" />
				{warning}
			</WarningErrorText>
		)}

		{/* Error can be also boolean true in which case we don't want to show message.*/}
		{!['boolean', 'undefined'].includes(typeof error) && error !== '' && (
			<WarningErrorText colorTheme={'error'}>
				<StyledIcon icon="exclamation-error" $size="sm" />
				{error}
			</WarningErrorText>
		)}
	</>
)

export default FormControlWarningError
