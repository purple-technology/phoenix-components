import type React from 'react'
import { type PropsWithChildren, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { CSSValue } from '../../types/CSSValue'
import type { Sizing } from '../../types/Sizing'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
import { Center, CloseButton, Overlay, Window } from './ModalStyles'

export interface ModalProps
	extends GenericComponentProps,
		PaddingProps,
		MarginProps {
	open: boolean
	onClose?: () => void
	showCloseButton?: boolean
	size?: Sizing | CSSValue
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
			if (animate) {
				windowRef.current?.addEventListener('transitionend', () =>
					setRendered(false)
				)
			} else {
				setRendered(false)
			}
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
					$size={size}
					my="3xl"
					p="md"
					{...commonProps}
					{...props}
					ref={windowRef}
				>
					{showCloseButton && (
						<CloseButton
							minimal
							size="lg"
							icon="cross"
							onClick={onClose}
							colorTheme="neutral"
						/>
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
