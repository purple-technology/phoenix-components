import React from 'react'

import Button from '../Button'
import Menu from '../Menu'
import MenuDivider from '../Menu/MenuDivider'
import MenuItem from '../Menu/MenuItem'
import DropdownComponent, { DropdownProps } from './index'

export default {
	component: DropdownComponent,
	title: 'components / Dropdown'
}

export const Dropdown = (args: DropdownProps) => (
	<DropdownComponent
		content={
			<Menu>
				<MenuItem>Item 1</MenuItem>
				<MenuItem>Item 2</MenuItem>
				<MenuDivider />
				<MenuItem>Item 3</MenuItem>
			</Menu>
		}
		{...args}
	>
		<Button>Click me</Button>
	</DropdownComponent>
)
