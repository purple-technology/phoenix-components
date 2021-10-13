import { Story } from '@storybook/react'
import React from 'react'

import { Menu as MenuComponent } from './index'
import { MenuDivider as MenuDividerComponent } from './MenuDivider'
import { MenuItem as MenuItemComponent } from './MenuItem'

export default {
	title: 'components / Menu',
	component: MenuComponent
}

export const Menu: Story = (args) => (
	<MenuComponent>
		<MenuItemComponent onClick={args.hide}>Withdraw</MenuItemComponent>
		<MenuItemComponent onClick={args.hide}>Transfer</MenuItemComponent>
		<MenuDividerComponent />
		<MenuItemComponent icon="lock" onClick={args.hide}>
			Change password
		</MenuItemComponent>
	</MenuComponent>
)

export const MenuItem: Story = (args) => (
	<MenuItemComponent icon="lock" onClick={args.hide}>
		Change password
	</MenuItemComponent>
)
MenuItem.storyName = 'MenuItem'

export const MenuDivider: Story = () => <MenuDividerComponent />
MenuDivider.storyName = 'MenuDivider'
