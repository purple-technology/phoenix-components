import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { marginArgTypes, paddingArgTypes } from '../common/Spacing/stories'
import { Card as CardComponent, CardProps } from '.'

export default {
	title: 'components / Card',
	component: CardComponent,
	argTypes: {
		...paddingArgTypes,
		...marginArgTypes
	}
}

export const Card: Story<PropsWithChildren<CardProps>> = (args) => (
	<CardComponent {...args} />
)
Card.args = {
	p: 'xl'
}
