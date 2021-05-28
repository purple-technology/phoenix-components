import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import TagComponent, { TagProps } from './index'

export default {
	title: 'components / Tag',
	component: TagComponent
}

export const Tag: Story<PropsWithChildren<TagProps>> = (args) => (
	<TagComponent {...args}>{args.children}</TagComponent>
)
Tag.args = {
	children: 'E-wallet'
}
