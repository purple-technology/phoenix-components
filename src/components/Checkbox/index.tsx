import React from 'react'

import { CheckboxRadioCommonProps } from '../common/CheckboxRadio'
import CheckboxRadio from '../common/CheckboxRadio'
import { StyledCheckbox } from './CheckboxStyles'

export type CheckboxProps = CheckboxRadioCommonProps

/**
 * `Checkbox` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const Checkbox: React.VoidFunctionComponent<CheckboxProps> = ({
	size = 'medium',
	colorTheme = 'primary',
	className,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	RTL,
	testId = 'Checkbox',
	...props
}) => (
	<StyledCheckbox
		className={className}
		colorTheme={colorTheme}
		size={size}
		data-testid={testId}
	>
		<CheckboxRadio type="checkbox" {...props} />
	</StyledCheckbox>
)
