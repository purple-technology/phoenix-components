import React from 'react'

import iconLock from '../../icons/lock.svg'
import MenuComponent, { MenuProps } from './index'
import MenuDivider from './MenuDivider'
import MenuItem from './MenuItem'
import { Story } from '@storybook/react'

export default {
	title: 'components / Menu',
	component: MenuComponent
}

export const Menu: Story<MenuProps> = () => (
	<MenuComponent>
		<MenuItem>Withdraw</MenuItem>
		<MenuItem>Transfer</MenuItem>
		<MenuDivider />
		<MenuItem icon={iconLock}>Change password</MenuItem>
	</MenuComponent>
)
