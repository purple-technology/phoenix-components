import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { Paragraph } from '../Paragraph'
import { Collapsible as CollapsibleComponent } from './index'

export default {
	component: CollapsibleComponent
} as Meta<typeof CollapsibleComponent>

export const Collapsible: StoryObj<typeof CollapsibleComponent> = {
	render: (args) => (
		<CollapsibleComponent {...args}>
			<Paragraph>
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
		</CollapsibleComponent>
	)
}
