import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/ColorTheme'
import NoticeButton from './NoticeButton'
import {
	BlockNoticeWrapper,
	CloseButton,
	FlexNoticeWrapper
} from './NoticeStyles'

export interface NoticeProps extends GenericComponentProps {
	colorTheme?: ColorTheme
	/** Text of the button. When supplied, button will automatically appear. `onClick` handler should be also supplied to provide functionality. */
	buttonText?: string
	className?: string
	/** Function to handle click on the button. */
	onClick?: (event: React.MouseEvent) => void
	/** Function to handle close event. When supplied, close button will automatically appear. */
	onClose?: (event: React.MouseEvent) => void
}

export const Notice: React.FC<NoticeProps> = ({
	colorTheme = 'primary',
	testId = 'Notice',
	onClose,
	onClick,
	buttonText,
	...props
}) => {
	if (!buttonText && !onClose) {
		// Simple block wrapper without unnecessary <div>s
		return (
			<BlockNoticeWrapper
				colorTheme={colorTheme}
				data-testid={testId}
				{...props}
			>
				{props.children}
			</BlockNoticeWrapper>
		)
	}

	return (
		<FlexNoticeWrapper colorTheme={colorTheme} data-testid={testId} {...props}>
			{/* Text of notice */}
			<div>{props.children}</div>
			<div>
				{buttonText && (
					<NoticeButton
						onClick={onClick}
						size={'small'}
						colorTheme={colorTheme}
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
					>
						&times;
					</CloseButton>
				)}
			</div>
		</FlexNoticeWrapper>
	)
}
