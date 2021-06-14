import React from 'react'

import { CheckboxRadioProps } from '../common/CheckboxRadio'
import CheckboxRadio from '../common/CheckboxRadio'
import { StyledCheckbox } from './CheckboxStyles'

export type CheckboxProps = CheckboxRadioProps

export const Checkbox: React.FC<CheckboxProps> = ({
	size = 'medium',
	colorTheme = 'primary',
	className,
	rtl,
	...props
}) => (
	<StyledCheckbox
		className={className}
		dir={rtl ? 'rtl' : 'ltr'}
		colorTheme={colorTheme}
		size={size}
	>
		<CheckboxRadio type="checkbox" {...props} />
	</StyledCheckbox>
)
