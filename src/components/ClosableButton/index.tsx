import React, { forwardRef } from 'react'

import iconClose from '../../icons/closable-button-close.svg'
import { Button, Close, Wrapper } from './ClosableButtonStyles'

export interface ClosableButtonProps
	extends React.HTMLProps<HTMLButtonElement> {
	onClose?: () => void
}

const ClosableButton: React.FC<ClosableButtonProps> = forwardRef(
	({ className, onClose, children, ...props }, ref) => {
		return (
			<Wrapper className={className}>
				<Button {...props} ref={ref} type="button">
					{children}
				</Button>
				<Close type="button" onClick={onClose}>
					<img src={iconClose} alt="" />
				</Close>
			</Wrapper>
		)
	}
)

export default ClosableButton
