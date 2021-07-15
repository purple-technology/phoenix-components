import React from 'react'

import {
	FormControlErrorType,
	FormControlWarningType
} from '../FormControl/types'
import { WarningErrorText } from './FormControlWarningErrorStyles'

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
			<WarningErrorText colorTheme={'warning'}>{warning}</WarningErrorText>
		)}

		{/* Error can be also boolean true in which case we don't want to show message.*/}
		{!['boolean', 'undefined'].includes(typeof error) && error !== '' && (
			<WarningErrorText colorTheme={'error'}>{error}</WarningErrorText>
		)}
	</>
)

export default FormControlWarningError
