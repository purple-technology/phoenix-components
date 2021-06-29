import React from 'react'

import { Heading } from '../../components/Heading'
import { Paragraph } from '../../components/Paragraph'

const TextPage: React.FC = () => {
	return (
		<>
			<Heading mb="m">Headline</Heading>
			<Heading as="h4" mb="s">
				Heading 4
			</Heading>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna
				massa, blandit sed accumsan at, blandit et ipsum. In lobortis luctus
				volutpat. Aliquam dolor elit, elementum scelerisque luctus gravida,
				interdum non mauris. Praesent eu eros leo. Fusce ex ex, ullamcorper ac
				nunc ut, porta sodales elit. Mauris at consequat felis. Etiam mollis
				pharetra semper. Fusce viverra in elit sed pretium. Vivamus finibus non
				lorem ut rutrum. Sed maximus ultrices massa at sagittis. Aliquam sed
				nunc mauris. Donec eros urna, rutrum nec efficitur a, scelerisque ut mi.
				Praesent sit amet lorem ac leo dapibus pulvinar. Nunc quis sodales
				lectus, et commodo nisl.
			</Paragraph>
			<Heading as="h4" mt="l" mb="s">
				Heading 4
			</Heading>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna
				massa, blandit sed accumsan at, blandit et ipsum. In lobortis luctus
				volutpat. Aliquam dolor elit, elementum scelerisque luctus gravida,
				interdum non mauris. Praesent eu eros leo. Fusce ex ex, ullamcorper ac
				nunc ut, porta sodales elit. Mauris at consequat felis. Etiam mollis
				pharetra semper. Fusce viverra in elit sed pretium. Vivamus finibus non
				lorem ut rutrum. Sed maximus ultrices massa at sagittis. Aliquam sed
				nunc mauris. Donec eros urna, rutrum nec efficitur a, scelerisque ut mi.
				Praesent sit amet lorem ac leo dapibus pulvinar. Nunc quis sodales
				lectus, et commodo nisl.
			</Paragraph>
		</>
	)
}

export default TextPage
