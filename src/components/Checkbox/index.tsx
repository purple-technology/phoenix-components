import type React from 'react'
import CheckboxRadio, {
	type CheckboxRadioCommonProps
} from '../common/CheckboxRadio'
import FormControlWarningError from '../common/FormControlWarningError'
import { StyledCheckbox } from './CheckboxStyles'

export type CheckboxProps = CheckboxRadioCommonProps & {
	indeterminate?: boolean
}

/**
 * `Checkbox` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
	size = 'md',
	colorTheme = 'brand',
	className,
	warning,
	error,
	testId = 'Checkbox',
	indeterminate,
	...props
}) => (
	<>
		<StyledCheckbox
			className={className}
			colorTheme={colorTheme}
			size={size}
			data-testid={testId}
			warning={!!warning}
			error={!!error}
			indeterminate={indeterminate}
		>
			<CheckboxRadio type="checkbox" {...props} />
		</StyledCheckbox>
		<FormControlWarningError warning={warning} error={error} />
	</>
)
