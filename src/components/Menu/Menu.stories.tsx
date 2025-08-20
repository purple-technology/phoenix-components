import { StoryFn } from '@storybook/react'
import React from 'react'

import { HorizontalDivider } from '../HorizontalDivider'
import { Menu as MenuComponent } from './index'
import { MenuItem as MenuItemComponent } from './MenuItem'

export default {
	component: MenuComponent
}

export const Menu = (args) => (
	<MenuComponent {...args}>
		<MenuItemComponent onClick={args.hide}>Withdraw</MenuItemComponent>
		<MenuItemComponent href="/" onClick={args.hide}>
			Transfer
		</MenuItemComponent>
		<HorizontalDivider my="3xs" />
		<MenuItemComponent icon="lock" onClick={args.hide}>
			Change password
		</MenuItemComponent>
	</MenuComponent>
)

export const MenuItem: StoryFn = (args) => (
	<MenuItemComponent icon="lock" {...args} onClick={args.hide}>
		Change password
	</MenuItemComponent>
)
