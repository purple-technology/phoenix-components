import isPropValid from '@emotion/is-prop-valid'
import type { Preview } from '@storybook/react'
import React from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { StyledTarget } from 'styled-components/dist/types'
import { GlobalStyles } from '../src/globalStyles'
import theme from '../src/theme'

const shouldForwardProp = (propName: string, target: StyledTarget<'web'>) => {
	return typeof target === 'string' ? isPropValid(propName) : true
}

const customShouldForwardProp = (
	prop: string,
	target: StyledTarget<'web'>
): boolean => {
	return !prop.startsWith('$') && shouldForwardProp(prop, target)
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
