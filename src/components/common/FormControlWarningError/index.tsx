import React from 'react'

import { WarningErrorText } from './FormControlWarningErrorStyles'

interface FormControlWarningErrorProps {
	/** Show yellow warning text and icon under the input */
	warning?: string
	/** Show red error text and icon under the input */
	error?: string | boolean
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
		{typeof error === 'string' && error !== '' && (
			<WarningErrorText colorTheme={'error'}>{error}</WarningErrorText>
		)}
	</>
)

export default FormControlWarningError
