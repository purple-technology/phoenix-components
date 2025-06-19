import { Meta, StoryFn } from '@storybook/react-vite'
import React, { useEffect, useState } from 'react'

import { Sizing } from '../../types/Sizing'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Modal as ModalComponent } from './index'

export default {
	title: 'components / Modal',
	component: ModalComponent,
	argTypes: {
		size: {
			options: Sizing,
			control: 'radio'
		}
	},
	args: {
		size: 'md'
	}
} as Meta<typeof ModalComponent>

export const Modal: StoryFn<typeof ModalComponent> = (args) => {
	const [open, setOpen] = useState(args.open)

	useEffect(() => {
		setOpen(args.open)
	}, [args.open])

	return (
		<>
			<Button onClick={(): void => setOpen(true)}>Open modal</Button>
			<ModalComponent
				{...args}
				open={open}
				onClose={(): void => setOpen(false)}
			>
				<Heading>Hello modal!</Heading>
				<Paragraph mt="s">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
					mauris non metus varius egestas. Suspendisse condimentum ligula non
					egestas placerat. Curabitur mollis lectus nisi, sit amet blandit enim
					ornare quis. Sed bibendum et mi sed elementum. Morbi finibus
					condimentum sem, quis euismod nunc tempus vitae. Aliquam dignissim
					sapien neque.
				</Paragraph>
				<Paragraph mt="s">
					Praesent tincidunt id quam in eleifend. Vivamus rutrum felis consequat
					odio mattis mollis id convallis arcu. Nam nulla dui, fermentum eget
					tellus at, vehicula euismod nunc. Phasellus egestas mi metus, eu
					sagittis elit hendrerit a. Morbi pharetra ante eget suscipit
					fermentum. Mauris fermentum lorem magna, nec facilisis sapien
					dignissim sit amet.
				</Paragraph>
			</ModalComponent>
		</>
	)
}
