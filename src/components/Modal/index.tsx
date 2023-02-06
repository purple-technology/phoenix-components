import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Sizing } from '../../types/Sizing'
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
	size?: Sizing
	animate?: boolean
	center?: boolean
	closeOnOverlayClick?: boolean
	container?: Element
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
	testId = 'Modal',
	size = 'md',
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
					my="3xl"
					p="md"
					{...commonProps}
					{...props}
				>
					{showCloseButton && (
						<CloseButton minimal size="lg" icon="cross" onClick={onClose} />
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
