import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../src/globalStyles'
import theme from '../src/theme'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		/** Sort alphabetically */
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
	},
	designToken: {
		disable: true
	}
}

export const decorators = [
	(Story) => (
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Story />
			</ThemeProvider>
		</React.StrictMode>
	)
]
