import React from 'react'

import MenuComponent, { MenuProps } from './index'
import MenuItem from './MenuItem'
import MenuDivider from './MenuDivider'

export default {
	title: 'components / Menu',
	component: MenuComponent
}

export const Menu = (args: MenuProps) => (
	<MenuComponent>
		<MenuItem>Item 1</MenuItem>
		<MenuItem>Item 2</MenuItem>
		<MenuDivider />
		<MenuItem>Item 3</MenuItem>
	</MenuComponent>
)
