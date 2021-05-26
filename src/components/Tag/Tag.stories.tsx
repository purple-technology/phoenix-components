import React from 'react'
import TagComponent, { TagProps } from './index'

export default {
	title: 'components / Tag',
	component: TagComponent
}

export const Tag = (args: TagProps) => (
	<TagComponent {...args}>{args.children}</TagComponent>
)
Tag.args = {
	children: 'E-wallet'
}
