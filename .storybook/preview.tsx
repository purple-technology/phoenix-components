import type { Preview } from '@storybook/react'
import { shouldForwardProp } from '@tradersclub/styled-system'
import React from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../src/globalStyles'
import theme from '../src/theme'

// Define spacing props that should not be forwarded (copying of the MarginProps and PaddingProps
const spacingProps = new Set([
	// Margin props
	'm',
	'mt',
	'mr',
	'mb',
	'ml',
	'mx',
	'my',
	// Padding props
	'p',
	'pt',
	'pr',
	'pb',
	'pl',
	'px',
	'py'
])

// Custom shouldForwardProp function
const customShouldForwardProp = (prop: string): boolean => {
	// Don't forward spacing props
	if (spacingProps.has(prop)) {
		return false
	}
	// Forward all props that don't start with '$' or aren't styled-system props
	return !prop.startsWith('$') && shouldForwardProp(prop)
}

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
				<StyleSheetManager shouldForwardProp={customShouldForwardProp}>
					<ThemeProvider theme={theme}>
						<GlobalStyles />
						<Story />
					</ThemeProvider>
				</StyleSheetManager>
			</React.StrictMode>
		)
	],
	tags: ['autodocs']
}

export default preview
