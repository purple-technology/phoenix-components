import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ComponentSize } from '../../types/ComponentSize'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { Center, CloseButton, Overlay, Window } from './ModalStyles'

export interface ModalProps
	extends GenericComponentProps,
		PaddingProps,
		MarginProps {
	open: boolean
	onClose?: () => void
	showCloseButton?: boolean
	size?: ComponentSize
	animate?: boolean
	center?: boolean
	closeOnOverlayClick?: boolean
	container?: Element
}

export const Modal: React.FC<ModalProps> = ({
	testId = 'Modal',
	size = 'medium',
	center = true,
	animate = true,
	showCloseButton = true,
	closeOnOverlayClick = true,
	container,
	open,
	onClose,
	children,
	...props
}) => {
	const [rendered, setRendered] = useState(open)
	const [visible, setVisible] = useState(open)
	const windowRef = useRef<HTMLDivElement>(null)

	const onOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		e.stopPropagation()

		if (
			!windowRef.current?.contains(e.target as HTMLElement) &&
			onClose &&
			closeOnOverlayClick
		) {
			onClose()
		}
	}

	useEffect(() => {
		if (open) {
			setRendered(true)
		} else {
			setVisible(false)
			windowRef.current?.addEventListener('transitionend', () =>
				setRendered(false)
			)
		}
	}, [open])

	useEffect(() => {
		if (rendered) {
			setTimeout(() => setVisible(true), 1)
		}
	}, [rendered])

	if (!rendered && !open) {
		return null
	}

	const commonProps = { visible, animate }

	const modalComponent = (
		<Overlay {...commonProps} onClick={onOverlayClick} data-testid={testId}>
			<Center center={center}>
				<Window
					ref={windowRef}
					$size={size}
					my="xxxl"
					p="m"
					{...commonProps}
					{...props}
				>
					{showCloseButton && (
						<CloseButton minimal size="large" icon="cross" onClick={onClose} />
					)}
					{children}
				</Window>
			</Center>
		</Overlay>
	)

	if (container) {
		return ReactDOM.createPortal(modalComponent, container)
	}

	return modalComponent
}
