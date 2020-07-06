import React from 'react'
import { storiesOf } from '@storybook/react'
import { Store, StateDecorator } from '@sambego/storybook-state'

import DemoForm from './index'

const store = new Store({
  default: true
})

storiesOf('Demo/DemoForm', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    return <DemoForm />
  })
