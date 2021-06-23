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
	RTL,
	...props
}) => (
	<StyledCheckbox
		className={className}
		dir={RTL ? 'rtl' : 'ltr'}
		colorTheme={colorTheme}
		size={size}
	>
		<CheckboxRadio type="checkbox" {...props} />
	</StyledCheckbox>
)
