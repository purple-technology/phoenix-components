import { Story } from '@storybook/react'
import React from 'react'

import { Menu as MenuComponent } from './index'
import { MenuDivider } from './MenuDivider'
import { MenuItem } from './MenuItem'

export default {
	title: 'components / Menu',
	component: MenuComponent
}

export const Menu: Story = (args) => (
	<MenuComponent>
		<MenuItem onClick={args.hide}>Withdraw</MenuItem>
		<MenuItem onClick={args.hide}>Transfer</MenuItem>
		<MenuDivider />
		<MenuItem icon="lock" onClick={args.hide}>
			Change password
		</MenuItem>
	</MenuComponent>
)
