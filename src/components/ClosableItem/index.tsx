import React from 'react'

import iconTimes from '../../icons/times.svg'
import { Close, Content, Wrapper } from './ClosableItemStyles'

export interface ClosableItemProps {
	onClose?: () => void
	className?: string
}

export const ClosableItem: React.FC<ClosableItemProps> = ({
	className,
	onClose,
	...props
}) => {
	return (
		<Wrapper className={className}>
			<Content {...props} />
			<Close type="button" onClick={onClose}>
				<img src={iconTimes} alt="" />
			</Close>
		</Wrapper>
	)
}
