import type React from 'react'
import type { DisplayProps } from 'styled-system'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { CSSValue } from '../../types/CSSValue'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledImage } from './Image.styles'

export interface ImageProps
	extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'>,
		MarginProps,
		PaddingProps,
		DisplayProps,
		GenericComponentProps {
	width?: CSSValue
	height?: CSSValue
	maxWidth?: CSSValue
	maxHeight?: CSSValue
}

export const Image: React.FC<ImageProps> = ({
	testId = 'Image',
	width,
	height,
	...props
}) => {
	return (
		<StyledImage
			data-testid={testId}
			$width={width}
			$height={height}
			{...props}
		/>
	)
}
