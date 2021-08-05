import Tippy from '@tippyjs/react/headless'
import React, {
	JSXElementConstructor,
	ReactElement,
	ReactNode,
	useState
} from 'react'
import { Props as TippyProps } from 'tippy.js'

import { StyledPopover } from './DropdownStyles'

export interface DropdownProps
	extends Partial<Omit<TippyProps, 'content' | 'render'>> {
	children: ReactElement<unknown, string | JSXElementConstructor<unknown>>
	content: React.ReactNode
}

export const DropdownContext =
	React.createContext<{ hide?(): void } | undefined>(undefined)

export const Dropdown: React.FC<DropdownProps> = ({ content, ...props }) => {
	const [visible, setVisible] = useState(false)

	return (
		<>
			<Tippy
				render={(attrs, _content, instance): ReactNode => (
					<DropdownContext.Provider value={{ hide: instance?.hide }}>
						<StyledPopover visible={visible} {...attrs}>
							{content}
						</StyledPopover>
					</DropdownContext.Provider>
				)}
				trigger="click"
				interactive
				animation
				placement="bottom-start"
				onMount={(): void => setVisible(true)}
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
				}}
				{...props}
			/>
		</>
	)
}
