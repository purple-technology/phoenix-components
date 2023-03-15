import React from 'react'
import { DisplayProps } from 'styled-system'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { CSSValue } from '../../types/CSSValue'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
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
