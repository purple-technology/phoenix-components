import React from 'react'

import { CheckboxRadioProps } from '../common/CheckboxRadio'
import CheckboxRadio from '../common/CheckboxRadio'
import { StyledRadio } from './RadioStyles'

export type RadioProps = CheckboxRadioProps

/**
 * `Radio` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const Radio: React.FC<RadioProps> = ({
	size = 'medium',
	colorTheme = 'primary',
	className,
	rtl,
	...props
}) => (
	<StyledRadio
		className={className}
		dir={rtl ? 'rtl' : 'ltr'}
		colorTheme={colorTheme}
		size={size}
	>
		<CheckboxRadio type="radio" {...props} />
	</StyledRadio>
)
