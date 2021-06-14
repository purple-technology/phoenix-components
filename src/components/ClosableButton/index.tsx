import React, { forwardRef } from 'react'

import iconClose from '../../icons/closable-button-close.svg'
import { Button, Close, Wrapper } from './ClosableButtonStyles'

export interface ClosableButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClose?: () => void
}

export const ClosableButton: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<ClosableButtonProps> &
		React.RefAttributes<HTMLButtonElement>
> = forwardRef(function ClosableButton({ className, onClose, ...props }, ref) {
	return (
		<Wrapper className={className}>
			<Button {...props} ref={ref} type="button" />
			<Close type="button" onClick={onClose}>
				<img src={iconClose} alt="" />
			</Close>
		</Wrapper>
	)
})
