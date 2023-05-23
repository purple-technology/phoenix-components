import { StoryFn } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { Label as LabelComponent, LabelProps } from './index'

export default {
	component: LabelComponent
}

export const Label: StoryFn<PropsWithChildren<LabelProps>> = (args) => (
	<LabelComponent {...args} />
)
Label.args = {
	children: 'Form label'
}
