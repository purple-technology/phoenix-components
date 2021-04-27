import { configure, addParameters, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo)

configure(require.context('../src', true, /.stories.tsx$/), module)

addParameters({
  options: {
    name: 'Phoenix components',
    url: 'https://github.com/purple-technology/phoenix-components',
    showPanel: false
  }
})
