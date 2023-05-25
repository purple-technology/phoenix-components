import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { TabPanel } from 'react-tabs'

import { Sizing } from '../../types/Sizing'
import { Box } from '../Box'
import { Tabs } from '.'
import { Tab } from './Tab'
import { TabList } from './TabList'

export default {
	component: Tabs,
	title: 'components / Tabs',
	argTypes: {
		size: {
			control: 'radio',
			options: Sizing,
			defaultValue: 'sm'
		}
	},
	args: {
		size: 'sm'
	}
} as Meta<typeof TabList>

export const Default: StoryFn<typeof TabList> = (args) => {
	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<Tabs onSelect={setSelectedIndex} selectedIndex={selectedIndex}>
			<TabList size={args.size}>
				<Tab>Reward store</Tab>
				<Tab>Your orders</Tab>
				<Tab disabled>Points history</Tab>
				<Tab>How it works</Tab>
			</TabList>
			<Box pb="l" />
			<TabPanel>Reward store content</TabPanel>
			<TabPanel>Your orders content</TabPanel>
			<TabPanel>Points history content</TabPanel>
			<TabPanel>How it works content</TabPanel>
		</Tabs>
	)
}

export const StaticTabList: StoryObj<typeof TabList> = {
	render: ({ size }) => {
		return (
			<TabList animate={false} size={size}>
				<Tab href="#TODO">Reward store</Tab>
				<Tab onClick={(): void => console.log('click')} selected>
					Your orders
				</Tab>
				<Tab disabled>Points history</Tab>
				<Tab href="#TODO" target="_blank">
					How it works
				</Tab>
			</TabList>
		)
	},

	name: 'StaticTabList'
}
