import type { StoryFn } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { marginArgTypes, paddingArgTypes } from '../common/Spacing/stories'
import { Card as CardComponent, CardProps } from '.'

export default {
	component: CardComponent,
	argTypes: {
		...paddingArgTypes,
		...marginArgTypes
	}
}

export const Card: StoryFn<PropsWithChildren<CardProps>> = (args) => (
	<CardComponent {...args} />
)
Card.args = {
	p: 'xl'
}
