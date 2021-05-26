import React, {
	FunctionComponent,
	ReactElement,
	JSXElementConstructor
} from 'react'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import { StyledPopover } from './DropdownStyles'

export interface DropdownProps {
	children: ReactElement<any, string | JSXElementConstructor<any>>
	content: React.ReactNode
}

const Dropdown: FunctionComponent<DropdownProps> = props => {
	return (
		<>
			<Tippy
				render={attrs => (
					<StyledPopover {...attrs}>{props.content}</StyledPopover>
				)}
				trigger="click"
				interactive
			>
				{props.children}
			</Tippy>
		</>
	)
}

export default Dropdown
