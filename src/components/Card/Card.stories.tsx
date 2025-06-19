import type { StoryObj } from '@storybook/react'

import { marginArgTypes, paddingArgTypes } from '../common/Spacing/stories'
import { Card as CardComponent } from '.'

export default {
	component: CardComponent,
	argTypes: {
		...paddingArgTypes,
		...marginArgTypes
	}
}

export const Card: StoryObj<typeof CardComponent> = {
	args: {
		p: 'xl',
		elevated: true,
		disabled: false
	}
}
