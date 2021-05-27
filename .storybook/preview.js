// https://storybook.js.org/docs/react/configure/overview
// https://storybook.js.org/docs/react/configure/styling-and-css
// To use your CSS in all stories, you simply import it in this file.

import './main.css'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/theme'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	options: {
		/** Sort alphabetically */
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
	}
}

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	)
]
