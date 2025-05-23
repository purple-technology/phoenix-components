import React, { PropsWithChildren } from 'react'

import iconTimes from '../../images/times.svg'
import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Close } from '../ClosableButton/ClosableButtonStyles'
import { Content, Wrapper } from './ClosableItemStyles'

export interface ClosableItemProps extends GenericComponentProps {
	onClose?: React.MouseEventHandler<HTMLButtonElement>
}

export const ClosableItem: React.FC<PropsWithChildren<ClosableItemProps>> = ({
	testId = 'ClosableItem',
	className,
	onClose,
	...props
}) => {
	return (
		<Wrapper className={className} data-testid={testId}>
			<Content {...props} />
			<Close type="button" onClick={onClose}>
				<img src={iconTimes} alt="" />
			</Close>
		</Wrapper>
	)
}
