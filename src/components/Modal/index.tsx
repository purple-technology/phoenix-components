import React, { useEffect, useRef, useState } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import Theme from '../../theme'
import { ComponentSize } from '../../types/ComponentSize'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { Center, CloseButton, Overlay, Window } from './ModalStyles'

export interface ModalProps
	extends GenericComponentProps,
		PaddingProps,
		MarginProps {
	open: boolean
	onClose: () => void
	showCloseButton?: boolean
	size?: ComponentSize
	animate?: boolean
	center?: boolean
}

export const Modal: React.FC<ModalProps> = ({
	testId = 'Modal',
	size = 'medium',
	center = true,
	animate = true,
	showCloseButton = true,
	open,
	onClose,
	children,
	...props
}) => {
	const [rendered, setRendered] = useState(open)
	const [visible, setVisible] = useState(open)
	const windowRef = useRef<HTMLDivElement>(null)

	const onOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault()

		if (!windowRef.current?.contains(e.target as HTMLElement)) {
			onClose()
		}
	}

	useEffect(() => {
		if (open) {
			setRendered(true)
		} else {
			setVisible(false)
			setTimeout(
				() => setRendered(false),
				parseFloat(Theme.$pc.transitionDuration) * 1000
			)
		}
	}, [open])

	useEffect(() => {
		if (rendered) {
			setImmediate(() => setVisible(true))
		}
	}, [rendered])

	if (!rendered && !open) {
		return null
	}

	const commonProps = { visible, animate }

	return (
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
}
