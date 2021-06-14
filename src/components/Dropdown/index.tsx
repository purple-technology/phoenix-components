import Tippy from '@tippyjs/react/headless'
import React, {
	JSXElementConstructor,
	ReactElement,
	ReactNode,
	useState
} from 'react'
import { Instance } from 'tippy.js'

import { StyledPopover } from './DropdownStyles'

export interface DropdownProps {
	children: ReactElement<unknown, string | JSXElementConstructor<unknown>>
	content: React.ReactNode
}

export const DropdownContext =
	React.createContext<{ hide?(): void } | undefined>(undefined)

export const Dropdown: React.FC<DropdownProps> = (props) => {
	const [instance, setInstance] = useState<Instance | undefined>(undefined)

	return (
		<>
			<Tippy
				onCreate={setInstance}
				render={(attrs): ReactNode => (
					<DropdownContext.Provider value={{ hide: instance?.hide }}>
						<StyledPopover {...attrs}>{props.content}</StyledPopover>
					</DropdownContext.Provider>
				)}
				trigger="click"
				interactive
			>
				{props.children}
			</Tippy>
		</>
	)
}
