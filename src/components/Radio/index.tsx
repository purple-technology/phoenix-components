import { nanoid } from 'nanoid'
import React, { FunctionComponent, InputHTMLAttributes } from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { StyledRadio } from './RadioStyles'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	rtl?: boolean
	colorTheme?: ColorTheme
	componentSize?: Exclude<
		ComponentSize,
		ComponentSize.TINY | ComponentSize.SMALL
	>
}

const Radio: FunctionComponent<RadioProps> = ({
	className,
	rtl,
	colorTheme,
	componentSize,
	children,
	...props
}) => {
	const id = props.id || nanoid()

	return (
		<StyledRadio
			className={className}
			dir={rtl ? 'rtl' : 'ltr'}
			colorTheme={colorTheme}
			componentSize={componentSize}
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
	componentSize: ComponentSize.MEDIUM
}

export default Radio
