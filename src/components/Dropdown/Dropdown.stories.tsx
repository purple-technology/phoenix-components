import { Story } from '@storybook/react'
import React from 'react'

import Button from '../Button'
import { Menu as MenuStory } from '../Menu/Menu.stories'
import DropdownComponent, { DropdownProps } from './index'

export default {
	component: DropdownComponent,
	title: 'components / Dropdown'
}

export const Dropdown: Story<DropdownProps> = (args) => (
	<DropdownComponent content={<MenuStory />} {...args}>
		<Button>Click me</Button>
	</DropdownComponent>
)
