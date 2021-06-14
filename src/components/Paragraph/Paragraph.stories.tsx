import React, { Story } from '@storybook/react'
import { PropsWithChildren } from 'react'

import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { argTypes } from '../common/Text/stories'
import { Paragraph as ParagraphComponent, ParagraphProps } from '.'

export default {
	title: 'components / Paragraph',
	component: ParagraphComponent,
	argTypes: {
		...argTypes,
		size: {
			options: ComponentSizeSmallMediumLarge
		}
	}
}

export const Paragraph: Story<PropsWithChildren<ParagraphProps>> = (args) => (
	<ParagraphComponent {...args} />
)

Paragraph.args = {
	children:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna massa, blandit sed accumsan at, blandit et ipsum. In lobortis luctus volutpat. Aliquam dolor elit, elementum scelerisque luctus gravida, interdum non mauris. Praesent eu eros leo. Fusce ex ex, ullamcorper ac nunc ut, porta sodales elit. Mauris at consequat felis. Etiam mollis pharetra semper. Fusce viverra in elit sed pretium. Vivamus finibus non lorem ut rutrum. Sed maximus ultrices massa at sagittis. Aliquam sed nunc mauris. Donec eros urna, rutrum nec efficitur a, scelerisque ut mi. Praesent sit amet lorem ac leo dapibus pulvinar. Nunc quis sodales lectus, et commodo nisl.'
}