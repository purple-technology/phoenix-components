import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { spacingArgType } from '../common/Spacing/stories'
import { Card as CardComponent, CardProps } from '.'

export default {
	title: 'components / Card',
	component: CardComponent,
	argTypes: {
		padding: spacingArgType,
		paddingX: spacingArgType,
		paddingY: spacingArgType,
		paddingTop: spacingArgType,
		paddingRight: spacingArgType,
		paddingBottom: spacingArgType,
		paddingLeft: spacingArgType
	}
}

export const Card: Story<PropsWithChildren<CardProps>> = (args) => (
	<CardComponent {...args} />
)
Card.args = {
	padding: 'xl'
}
