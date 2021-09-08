import React from 'react'

import { CheckboxRadioCommonProps } from '../common/CheckboxRadio'
import CheckboxRadio from '../common/CheckboxRadio'
import { StyledRadio } from './RadioStyles'

export type RadioProps = CheckboxRadioCommonProps

/**
 * `Radio` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const Radio: React.VoidFunctionComponent<RadioProps> = ({
	size = 'medium',
	colorTheme = 'primary',
	className,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	RTL,
	...props
}) => (
	<StyledRadio className={className} colorTheme={colorTheme} size={size}>
		<CheckboxRadio type="radio" {...props} />
	</StyledRadio>
)
