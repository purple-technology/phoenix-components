import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../src/globalStyles'
import theme from '../src/theme'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		options: {
			storySort: {
				method: 'alphabetical',
				order: [
					'Foundation',
					['Design Tokens', 'Colors', 'Spacing'],
					'Components',
					'Demo'
				]
			}
		},
		designToken: {
			disable: true
		}
	},
	decorators: [
		(Story) => (
			<React.StrictMode>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Story />
				</ThemeProvider>
			</React.StrictMode>
		)
	],
	tags: ['autodocs']
}

export default preview
