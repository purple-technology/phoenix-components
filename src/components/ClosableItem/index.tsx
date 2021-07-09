import React from 'react'

import iconClose from '../../icons/closable-button-close.svg'
import { Close, Content, Wrapper } from './ClosableItemStyles'

export interface ClosableItemProps {
	className: string
	onClose?: () => void
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
				<img src={iconClose} alt="" />
			</Close>
		</Wrapper>
	)
}
