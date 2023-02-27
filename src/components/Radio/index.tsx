import React from 'react'

import { CheckboxRadioCommonProps } from '../common/CheckboxRadio'
import CheckboxRadio from '../common/CheckboxRadio'
import FormControlWarningError from '../common/FormControlWarningError'
import { StyledRadio } from './RadioStyles'

export type RadioProps = CheckboxRadioCommonProps

/**
 * `Radio` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const Radio: React.VoidFunctionComponent<RadioProps> = ({
	size = 'md',
	colorTheme = 'brand',
	className,
	warning,
	error,
	testId = 'Radio',
	...props
}) => (
	<>
		<StyledRadio
			className={className}
			colorTheme={colorTheme}
			size={size}
			data-testid={testId}
			warning={!!warning}
			error={!!error}
		>
			<CheckboxRadio type="radio" {...props} />
		</StyledRadio>
		<FormControlWarningError warning={warning} error={error} />
	</>
)
