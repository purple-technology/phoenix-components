import React, { forwardRef } from 'react'

import IconTimes from '../../images/times.svg'
import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Button, Close, Wrapper } from './ClosableButtonStyles'

export interface ClosableButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		GenericComponentProps {
	onClose?: React.MouseEventHandler<HTMLButtonElement>
}

export const ClosableButton: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<ClosableButtonProps> &
		React.RefAttributes<HTMLButtonElement>
> = forwardRef(function ClosableButton(
	{ testId = 'ClosableButton', className, onClose, ...props },
	ref
) {
	return (
		<Wrapper className={className} data-testid={testId}>
			<Button {...props} ref={ref} type="button" />
			<Close type="button" onClick={onClose}>
				<IconTimes />
			</Close>
		</Wrapper>
	)
})
