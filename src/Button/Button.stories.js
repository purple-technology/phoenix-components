import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'

storiesOf('Button', module)
  .addParameters({
    options: {
      showPanel: true,
      showNav: true,
      panelPosition: 'bottom'
    },
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    return <Button label="Click me!" size="normal" />
  })
