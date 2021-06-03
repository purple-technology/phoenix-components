import React from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import NoticeButton from './NoticeButton'
import { CloseButton, NoticeWrapper } from './NoticeStyles'

export interface NoticeProps {
	colorTheme?: ColorTheme
	buttonText?: string
	className?: string
	onClick?: (event: React.MouseEvent) => void
	onClose?: (event: React.MouseEvent) => void
}

const Notice: React.FC<NoticeProps> = ({
	colorTheme = ColorTheme.PRIMARY,
	buttonText,
	onClick,
	onClose,
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
						size={ComponentSize.SMALL}
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

Notice.defaultProps = {
	colorTheme: ColorTheme.PRIMARY
}

export default Notice
