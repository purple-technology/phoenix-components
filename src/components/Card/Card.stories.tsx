import type { StoryObj } from '@storybook/react'
import { PropsWithChildren } from 'react'

import { marginArgTypes, paddingArgTypes } from '../common/Spacing/stories'
import { Card as CardComponent, CardProps } from '.'

export default {
	component: CardComponent,
	argTypes: {
		...paddingArgTypes,
		...marginArgTypes
	}
}

export const Card: StoryObj<PropsWithChildren<CardProps>> = {
	args: {
		p: 'xl'
	}
}
