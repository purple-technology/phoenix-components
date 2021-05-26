import React, { FunctionComponent } from 'react'

import { CloseButton, NoticeWrapper } from './NoticeStyles'
import { ColorTheme } from '../../theme/ColorTheme'
import Button from '../Button'
import { ComponentSize } from '../../enum/ComponentSize'
import NoticeButton from './NoticeButton'

export interface NoticeProps {
	colorTheme?: ColorTheme
	buttonText?: string
	className?: string
	onClick?: (event: React.MouseEvent) => void
	onClose?: (event: React.MouseEvent) => void
}

const Notice: FunctionComponent<NoticeProps> = props => {
	return (
		<NoticeWrapper {...props}>
			{/* Text of notice */}
			<div>{props.children}</div>
			<div>
				{props.buttonText && (
					<NoticeButton
						onClick={props.onClick}
						size={ComponentSize.SMALL}
						colorTheme={props.colorTheme}
					>
						{props.buttonText}
					</NoticeButton>
				)}
				{props.onClose && (
					<CloseButton
						type="button"
						colorTheme={props.colorTheme}
						paddingLeft={!!props.buttonText}
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
