import type React from 'react'
import type { PropsWithChildren } from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { ColorTheme } from '../../types/Color'
import type { SizingSmMd } from '../../types/Sizing'
import type { MarginProps } from '../common/Spacing/MarginProps'
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
