import { nanoid } from 'nanoid'
import React, { InputHTMLAttributes } from 'react'

import { ColorTheme } from '../../enum/ColorTheme'
import {
	ComponentSize,
	ComponentSizeMediumLarge
} from '../../enum/ComponentSize'
import { StyledCheckbox } from './CheckboxStyles'

export interface CheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	rtl?: boolean
	colorTheme?: ColorTheme
	size?: ComponentSizeMediumLarge
}

const Checkbox: React.FC<CheckboxProps> = ({
	size = ComponentSize.MEDIUM,
	colorTheme = ColorTheme.PRIMARY,
	className,
	rtl,
	children,
	...props
}) => {
	const id = props.id || nanoid()

	return (
		<>
			<StyledCheckbox
				className={className}
				dir={rtl ? 'rtl' : 'ltr'}
				colorTheme={colorTheme}
				size={size}
			>
				<input {...props} type="checkbox" id={id} />
				<label htmlFor={id}>
					<span>{children}</span>
				</label>
			</StyledCheckbox>
		</>
	)
}

export default Checkbox
