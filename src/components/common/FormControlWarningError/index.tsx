import React from 'react'

import { ColorTheme } from '../../../theme/ColorTheme'
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
			<WarningErrorText colorTheme={ColorTheme.WARNING}>
				{warning}
			</WarningErrorText>
		)}

		{/* Error can be also boolean true in which case we don't want to show message.*/}
		{typeof error === 'string' && error !== '' && (
			<WarningErrorText colorTheme={ColorTheme.ERROR}>{error}</WarningErrorText>
		)}
	</>
)

export default FormControlWarningError
