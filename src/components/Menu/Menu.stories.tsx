import { Story } from '@storybook/react'
import React from 'react'

import iconLock from '../../icons/lock.svg'
import { Menu as MenuComponent } from './index'
import { MenuDivider } from './MenuDivider'
import { MenuItem } from './MenuItem'

export default {
	title: 'components / Menu',
	component: MenuComponent
}

export const Menu: Story = () => (
	<MenuComponent>
		<MenuItem>Withdraw</MenuItem>
		<MenuItem>Transfer</MenuItem>
		<MenuDivider />
		<MenuItem icon={iconLock}>Change password</MenuItem>
	</MenuComponent>
)
