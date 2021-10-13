import React, { useEffect, useRef, useState } from 'react'

import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledText } from './TextStyles'

export interface TextProps extends CommonTextProps, PaddingProps, MarginProps {
	/** Text size - small, medium, large; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: ComponentSizeSmallMediumLarge | string | number
	/** Indicates that this component should be truncated with an ellipsis if it overflows its container. The `title` attribute will also be added when content overflows to show the full text of the children on hover. */
	ellipsize?: boolean
	element?: 'div' | 'span'
	/** HTML title of the element. This title has priority over automatically generated title when `ellipsize` is enabled. */
	title?: string
}

/**
 * If paragraph is needed, use `Paragraph` component, as it uses looser line-height.
 */
export const Text: React.FC<TextProps> = ({
	size = 'medium',
	color = 'darkest',
	ellipsize = false,
	element = 'div',
	testId = 'Text',
	...props
}) => {
	const textRef = useRef<HTMLElement>(null)
	const [title, setTitle] = useState<string | undefined>(props.title)

	useEffect(() => {
		const isTextOverflowing =
			ellipsize &&
			textRef.current &&
			textRef.current.scrollWidth > textRef.current.clientWidth

		setTitle(
			props.title && props.title !== ''
				? props.title
				: isTextOverflowing && textRef.current?.textContent
				? textRef.current.textContent
				: undefined
		)
	}, [ellipsize, textRef, props.title, props.children])

	return (
		<StyledText
			$size={size}
			$color={color}
			ellipsize={ellipsize}
			as={element}
			title={title}
			ref={textRef}
			data-testid={testId}
			{...props}
		/>
	)
}
