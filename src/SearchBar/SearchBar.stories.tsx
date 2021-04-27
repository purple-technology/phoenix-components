// SearchBar.stories.tsx

import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import SearchBar, { SearchBarProps } from './index'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    items: { control: 'object' },
    onQueryChange: { action: 'queryChanged' }
  }
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof SearchBar>> = (
  args: SearchBarProps
) => <SearchBar {...args} />
export const Default = Template.bind({})
Default.args = {
  items: [
    { title: 'Foo', link: '#foo' },
    { title: 'Bar', link: '#bar' }
  ],
  noResults: ''
}
