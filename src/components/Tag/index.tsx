import React, { PropsWithChildren } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/Color'
import { SizingSmMd } from '../../types/Sizing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { StyledTag } from './TagStyles'

export interface TagProps extends GenericComponentProps, MarginProps {
	colorTheme?: ColorTheme
	size?: SizingSmMd
	secondary?: boolean
	outline?: boolean
}

export const Tag: React.FC<PropsWithChildren<TagProps>> = ({
	colorTheme = 'brand',
	size = 'md',
	testId = 'Tag',
	...props
}) => {
	return (
		<StyledTag
			colorTheme={colorTheme}
			size={size}
			data-testid={testId}
			{...props}
		/>
	)
}
