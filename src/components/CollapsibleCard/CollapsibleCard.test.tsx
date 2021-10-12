import '@testing-library/jest-dom'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '../..'
import { CollapsibleCard } from '.'

test('heading is rendered when heading is provided', async () => {
	render(
		<ThemeProvider theme={{ dir: 'ltr', ...Theme }}>
			<CollapsibleCard heading="Heading" />
		</ThemeProvider>
	)

	const headingElement = screen.getByText('Heading')

	expect(headingElement).toBeInTheDocument()
})

test('content is visible when first rendered, not visible when collapsed and visible when expanded', async () => {
	render(
		<ThemeProvider theme={{ dir: 'ltr', ...Theme }}>
			<CollapsibleCard heading="Heading">
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</CollapsibleCard>
		</ThemeProvider>
	)

	const list = screen.getByRole('list')
	const item1Element = screen.getByText('Item 1')
	const item2Element = screen.getByText('Item 2')
	const item3Element = screen.getByText('Item 3')
	const button = screen.getByRole('button')

	expect(list).toBeVisible()
	expect(item1Element).toBeVisible()
	expect(item2Element).toBeVisible()
	expect(item3Element).toBeVisible()

	expect(button).toBeInTheDocument()

	fireEvent.click(button)

	expect(list.parentElement).not.toBeNull()

	if (list.parentElement == null) return

	fireEvent.transitionEnd(list.parentElement)

	await waitFor(() => {
		expect(list).not.toBeVisible()
		expect(item1Element).not.toBeVisible()
		expect(item2Element).not.toBeVisible()
		expect(item3Element).not.toBeVisible()
	})

	fireEvent.click(button)

	fireEvent.transitionEnd(list.parentElement)

	await waitFor(() => {
		expect(list).toBeVisible()
		expect(item1Element).toBeVisible()
		expect(item2Element).toBeVisible()
		expect(item3Element).toBeVisible()
	})
})
