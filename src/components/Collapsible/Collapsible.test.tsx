import '@testing-library/jest-dom'

import { render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '../..'
import { Collapsible } from '.'

test('collapsible is expanded when collapsed is initially false and collapses when collapsed updated to true', async () => {
	const { rerender } = render(
		<ThemeProvider theme={{ dir: 'ltr', ...Theme }}>
			<Collapsible collapsed={false}>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</Collapsible>
		</ThemeProvider>
	)

	const item1Element = screen.getByText('Item 1')
	const item2Element = screen.getByText('Item 2')
	const item3Element = screen.getByText('Item 3')

	expect(item1Element).toBeVisible()
	expect(item2Element).toBeVisible()
	expect(item3Element).toBeVisible()

	rerender(<Collapsible collapsed={true} />)

	await waitFor(() => {
		expect(item1Element).not.toBeVisible()
		expect(item2Element).not.toBeVisible()
		expect(item3Element).not.toBeVisible()
	})
})

test('collapsible is collapsed when collapsed is initially true and expanded when collpsed update to false', async () => {
	const { rerender } = render(
		<ThemeProvider theme={{ dir: 'ltr', ...Theme }}>
			<Collapsible collapsed>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</Collapsible>
		</ThemeProvider>
	)

	const item1Element = screen.getByText('Item 1')
	const item2Element = screen.getByText('Item 2')
	const item3Element = screen.getByText('Item 3')

	expect(item1Element).not.toBeVisible()
	expect(item2Element).not.toBeVisible()
	expect(item3Element).not.toBeVisible()

	rerender(
		<ThemeProvider theme={{ dir: 'ltr', ...Theme }}>
			<Collapsible collapsed={false}>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</Collapsible>
		</ThemeProvider>
	)

	await waitFor(() => {
		expect(item1Element).toBeVisible()
		expect(item2Element).toBeVisible()
		expect(item3Element).toBeVisible()
	})
})
