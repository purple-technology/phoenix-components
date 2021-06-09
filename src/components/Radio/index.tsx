import { nanoid } from 'nanoid'
import React, { InputHTMLAttributes } from 'react'

import { ColorTheme } from '../../enum/ColorTheme'
import {
	ComponentSize,
	ComponentSizeMediumLarge
} from '../../enum/ComponentSize'
import { StyledRadio } from './RadioStyles'

export interface RadioProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	rtl?: boolean
	colorTheme?: ColorTheme
	size?: ComponentSizeMediumLarge
}

const Radio: React.FC<RadioProps> = ({
	colorTheme = ColorTheme.PRIMARY,
	size = ComponentSize.MEDIUM,
	className,
	rtl,
	children,
	...props
}) => {
	const id = props.id || nanoid()

	return (
		<StyledRadio
			className={className}
			dir={rtl ? 'rtl' : 'ltr'}
			colorTheme={colorTheme}
			size={size}
		>
			<input {...props} type="checkbox" id={id} />
			<label htmlFor={id}>
				<span>{children}</span>
			</label>
		</StyledRadio>
	)
}

Radio.defaultProps = {
	colorTheme: ColorTheme.PRIMARY,
	size: ComponentSize.MEDIUM
}

export default Radio
