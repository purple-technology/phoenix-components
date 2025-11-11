import type { StoryObj } from '@storybook/react'
import type { PropsWithChildren } from 'react'

import { Label as LabelComponent, type LabelProps } from './index'

export default {
	component: LabelComponent
}

export const Label: StoryObj<PropsWithChildren<LabelProps>> = {
	args: {
		children: 'Form label'
	}
}
