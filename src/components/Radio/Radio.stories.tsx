import { StoryObj } from '@storybook/react'

import { argTypes } from '../common/CheckboxRadio/stories'
import { Radio as RadioComponent, RadioProps } from './index'

export default {
	component: RadioComponent,
	argTypes
}

export const Radio: StoryObj<RadioProps> = {
	args: {
		label: 'Click me'
	}
}
