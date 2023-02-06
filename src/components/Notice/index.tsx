import React, { PropsWithChildren } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/Color'
import { IconAlignment } from '../../types/IconAlignment'
import { IconType } from '../../types/IconType'
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
	/** Action button is loading */
	buttonLoading?: boolean
	/** Action button icon */
	buttonIcon?: IconType
	/** Action button icon alignment */
	buttonIconAlignment?: IconAlignment
	/** data-testid for action button */
	buttonTestId?: string
	/** data-testid for close button */
	closeTestId?: string
	/** Function to handle click on the button. */
	onClick?: (event: React.MouseEvent) => void
	/** Function to handle close event. When supplied, close button will automatically appear. */
	onClose?: (event: React.MouseEvent) => void
	/** Mobile breakpoint in pixels. */
	breakpoint?: number
}

export const Notice: React.FC<PropsWithChildren<NoticeProps>> = ({
	colorTheme = 'brand',
	testId = 'Notice',
	px = 'lg',
	breakpoint = 640,
	onClose,
	onClick,
	buttonText,
	buttonLoading = false,
	buttonIcon,
	buttonIconAlignment,
	buttonTestId,
	closeTestId,
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
					size="sm"
					loading={buttonLoading}
					icon={buttonIcon}
					iconAlignment={buttonIconAlignment}
					colorTheme={colorTheme}
					breakpoint={breakpoint}
					testId={buttonTestId}
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
					data-testid={closeTestId}
				>
					&times;
				</CloseButton>
			)}
		</FlexNoticeWrapper>
	)
}
