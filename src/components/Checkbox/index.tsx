import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { nanoid } from 'nanoid'

import { StyledCheckbox } from './CheckboxStyles'
import { ColorTheme } from '../../theme/ColorTheme'
import { ComponentSize } from '../../enum/ComponentSize'

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
