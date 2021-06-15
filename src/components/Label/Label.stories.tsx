import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { Label as LabelComponent, LabelProps } from './index'

export default {
	title: 'components / Label',
	component: LabelComponent
}

export const Label: Story<PropsWithChildren<LabelProps>> = (args) => (
	<LabelComponent {...args} />
)
Label.args = {
	children: 'Form label'
}
