import React from 'react'

import { ColorTheme } from '../../types/ColorTheme'
import NoticeButton from './NoticeButton'
import { CloseButton, NoticeWrapper } from './NoticeStyles'

export interface NoticeProps {
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
	onClose,
	onClick,
	buttonText,
	...props
}) => {
	return (
		<NoticeWrapper colorTheme={colorTheme} {...props}>
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
		</NoticeWrapper>
	)
}
