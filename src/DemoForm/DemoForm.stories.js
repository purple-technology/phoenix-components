import React from 'react'
import { storiesOf } from '@storybook/react'

import DemoForm from './index'

storiesOf('Demo|DemoForm', module)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    return <DemoForm />
  })
