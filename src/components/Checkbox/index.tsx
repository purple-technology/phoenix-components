import { nanoid } from 'nanoid'
import React, { InputHTMLAttributes } from 'react'

import {
	ComponentSize,
	ComponentSizeMediumLarge
} from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { StyledCheckbox } from './CheckboxStyles'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	rtl?: boolean
	colorTheme?: ColorTheme
	componentSize?: ComponentSizeMediumLarge
}

const Checkbox: React.FC<CheckboxProps> = ({
	componentSize = ComponentSize.MEDIUM,
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
				componentSize={componentSize}
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
