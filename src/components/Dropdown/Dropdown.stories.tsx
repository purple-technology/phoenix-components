import type { StoryFn } from '@storybook/react'
import type React from 'react'

import { Button } from '../Button'
import { Menu as MenuStory } from '../Menu/Menu.stories'
import { Dropdown as DropdownComponent, type DropdownProps } from './index'

export default {
	component: DropdownComponent
}

export const Dropdown: StoryFn<DropdownProps> = (args) => (
	<DropdownComponent
		{...args}
		content={(hide): React.ReactNode => <MenuStory hide={hide} />}
	>
		<Button>Click me</Button>
	</DropdownComponent>
)
