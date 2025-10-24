import type { StoryObj } from '@storybook/react'

import { argTypes } from '../common/CheckboxRadio/stories'
import { Radio as RadioComponent, type RadioProps } from './index'

export default {
	component: RadioComponent,
	argTypes,
	args: {
		label: 'Click me'
	}
}

export const Radio: StoryObj<RadioProps> = {
	render: (args) => <RadioComponent {...args} />
}
