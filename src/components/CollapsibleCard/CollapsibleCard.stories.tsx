import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'

import { marginArgTypes, paddingArgTypes } from '../common/Spacing/stories'
import { Paragraph } from '../Paragraph'
import { CollapsibleCard as CollapsibleCardComponent } from './index'

export default {
	title: 'components / CollapsibleCard',
	component: CollapsibleCardComponent,
	argTypes: {
		...paddingArgTypes,
		...marginArgTypes
	}
} as ComponentMeta<typeof CollapsibleCardComponent>

export const CollapsibleCard: ComponentStory<typeof CollapsibleCardComponent> =
	(args) => (
		<CollapsibleCardComponent {...args} onClick={undefined}>
			<Paragraph mt="s">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
				mauris non metus varius egestas. Suspendisse condimentum ligula non
				egestas placerat. Curabitur mollis lectus nisi, sit amet blandit enim
				ornare quis. Sed bibendum et mi sed elementum. Morbi finibus condimentum
				sem, quis euismod nunc tempus vitae. Aliquam dignissim sapien neque.
			</Paragraph>
			<Paragraph mt="s">
				Praesent tincidunt id quam in eleifend. Vivamus rutrum felis consequat
				odio mattis mollis id convallis arcu. Nam nulla dui, fermentum eget
				tellus at, vehicula euismod nunc. Phasellus egestas mi metus, eu
				sagittis elit hendrerit a. Morbi pharetra ante eget suscipit fermentum.
				Mauris fermentum lorem magna, nec facilisis sapien dignissim sit amet.
			</Paragraph>
		</CollapsibleCardComponent>
	)

CollapsibleCard.args = {
	heading: 'Heading'
}

CollapsibleCard.storyName = 'CollapsibleCard'
