import { nanoid } from 'nanoid'
import React, { FunctionComponent, InputHTMLAttributes } from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { StyledCheckbox } from './CheckboxStyles'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	rtl?: boolean
	colorTheme?: ColorTheme
	componentSize?: ComponentSize
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
	className,
	rtl,
	colorTheme,
	componentSize,
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

Checkbox.defaultProps = {
	colorTheme: ColorTheme.PRIMARY,
	componentSize: ComponentSize.MEDIUM
}

export default Checkbox
