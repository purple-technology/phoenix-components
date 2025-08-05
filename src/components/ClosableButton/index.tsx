import React from 'react'

import iconTimes from '../../images/times.svg'
import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Button, Close, Wrapper } from './ClosableButtonStyles'

export interface ClosableButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		GenericComponentProps {
	onClose?: React.MouseEventHandler<HTMLButtonElement>
	ref?: React.Ref<HTMLButtonElement>
}

export const ClosableButton: React.FC<ClosableButtonProps> = ({
	testId = 'ClosableButton',
	className,
	onClose,
	ref,
	...props
}) => {
	return (
		<Wrapper className={className} data-testid={testId}>
			<Button {...props} ref={ref} type="button" />
			<Close type="button" onClick={onClose}>
				<img src={iconTimes} alt="" />
			</Close>
		</Wrapper>
	)
}
