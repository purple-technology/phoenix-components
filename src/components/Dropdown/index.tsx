import { TippyProps } from '@tippyjs/react'
import Tippy from '@tippyjs/react/headless'
import React, {
	JSXElementConstructor,
	ReactElement,
	ReactNode,
	useState
} from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { StyledPopover } from './DropdownStyles'

export interface DropdownProps
	extends Partial<Omit<TippyProps, 'content' | 'render'>>,
		GenericComponentProps {
	children: ReactElement<unknown, string | JSXElementConstructor<unknown>>
	content: (hide?: () => void) => React.ReactNode
}

/**
 * This component supports all the props of Tippy.js library (https://atomiks.github.io/tippyjs/v6/all-props/)
 */
export const Dropdown: React.FC<DropdownProps> = ({
	testId = 'Dropdown',
	content,
	onCreate,
	onMount,
	onHide,
	...props
}) => {
	const [visible, setVisible] = useState(false)

	return (
		<Tippy
			render={(attrs, _content, instance): ReactNode => (
				<StyledPopover visible={visible} {...attrs}>
					{content(instance?.hide)}
				</StyledPopover>
			)}
			trigger="click"
			interactive
			animation
			placement="bottom-start"
			onCreate={(instance): void => {
				instance.popper.dataset.testid = testId
				if (onCreate) onCreate(instance)
			}}
			onMount={(instance): void => {
				setVisible(true)
				if (onMount) onMount(instance)
			}}
			onHide={(instance): void => {
				const unmountInstance = (): void => {
					instance.unmount()
					instance.popper.firstChild?.removeEventListener(
						'transitionend',
						unmountInstance
					)
				}
				instance.popper.firstChild?.addEventListener(
					'transitionend',
					unmountInstance
				)
				setVisible(false)
				if (onHide) onHide(instance)
			}}
			{...props}
		/>
	)
}
