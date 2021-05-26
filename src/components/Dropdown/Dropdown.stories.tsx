import React from 'react'

import DropdownComponent, { DropdownProps } from './index'
import Button from '../Button'
import Menu from '../Menu'
import MenuItem from '../Menu/MenuItem'
import MenuDivider from '../Menu/MenuDivider'

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
