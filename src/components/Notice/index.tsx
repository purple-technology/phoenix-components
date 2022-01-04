import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/ColorTheme'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import NoticeButton from './NoticeButton'
import {
	BlockNoticeWrapper,
	CloseButton,
	FlexNoticeWrapper,
	NoticeText
} from './NoticeStyles'

export interface NoticeProps
	extends GenericComponentProps,
		MarginProps,
		PaddingProps {
	colorTheme?: ColorTheme
	/** Text of the button. When supplied, button will automatically appear. `onClick` handler should be also supplied to provide functionality. */
	buttonText?: string
	/** Function to handle click on the button. */
	onClick?: (event: React.MouseEvent) => void
	/** Function to handle close event. When supplied, close button will automatically appear. */
	onClose?: (event: React.MouseEvent) => void
	/** Mobile breakpoint in pixels. */
	breakpoint?: number
}

export const Notice: React.FC<NoticeProps> = ({
	colorTheme = 'primary',
	testId = 'Notice',
	px = 'l',
	breakpoint = 640,
	onClose,
	onClick,
	buttonText,
	...props
}) => {
	const py = props.py ?? (!buttonText && !onClose ? 'm' : 'xs')

	if (!buttonText && !onClose) {
		// Simple block wrapper without unnecessary <div>s
		return (
			<BlockNoticeWrapper
				colorTheme={colorTheme}
				data-testid={testId}
				px={px}
				py={py}
				{...props}
			>
				{props.children}
			</BlockNoticeWrapper>
		)
	}

	return (
		<FlexNoticeWrapper
			colorTheme={colorTheme}
			data-testid={testId}
			px={px}
			py={py}
			breakpoint={breakpoint}
			withButton={!!buttonText}
			withClose={!!onClose}
			{...props}
		>
			{/* Text of notice */}
			<NoticeText>{props.children}</NoticeText>
			{buttonText && (
				<NoticeButton
					onClick={onClick}
					size={'small'}
					colorTheme={colorTheme}
					breakpoint={breakpoint}
				>
					{buttonText}
				</NoticeButton>
			)}
			{onClose && (
				<CloseButton
					type="button"
					colorTheme={colorTheme}
					paddingLeft={!!buttonText}
					onClick={onClose}
					breakpoint={breakpoint}
				>
					&times;
				</CloseButton>
			)}
		</FlexNoticeWrapper>
	)
}
