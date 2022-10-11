import { Story } from '@storybook/react'
import React from 'react'

import { HorizontalDivider } from '../HorizontalDivider'
import { Menu as MenuComponent } from './index'
import { MenuItem as MenuItemComponent } from './MenuItem'

export default {
	title: 'components / Menu',
	component: MenuComponent
}

export const Menu: Story = (args) => (
	<MenuComponent {...args}>
		<MenuItemComponent onClick={args.hide}>Withdraw</MenuItemComponent>
		<MenuItemComponent onClick={args.hide}>Transfer</MenuItemComponent>
		<HorizontalDivider />
		<MenuItemComponent icon="lock" onClick={args.hide}>
			Change password
		</MenuItemComponent>
	</MenuComponent>
)

export const MenuItem: Story = (args) => (
	<MenuItemComponent icon="lock" {...args} onClick={args.hide}>
		Change password
	</MenuItemComponent>
)
MenuItem.storyName = 'MenuItem'
