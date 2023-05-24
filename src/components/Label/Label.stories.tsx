import { StoryObj } from '@storybook/react'
import { PropsWithChildren } from 'react'

import { Label as LabelComponent, LabelProps } from './index'

export default {
	component: LabelComponent
}

export const Label: StoryObj<PropsWithChildren<LabelProps>> = {
	args: {
		children: 'Form label'
	}
}
