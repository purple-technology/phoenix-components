import React, { PropsWithChildren } from 'react'

import LabelComponent, { LabelProps } from './index'

export default {
	title: 'components / Label',
	component: LabelComponent
}

export const Label = (args: PropsWithChildren<LabelProps>) => (
	<LabelComponent {...args} />
)
Label.args = {
	children: 'Form label'
}
