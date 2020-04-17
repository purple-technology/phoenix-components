import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Alert from './index'

import { STORY_PARAMS } from '../globals'

storiesOf('Components/Alert', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const TextKnob = text('Text', 'This is an alert')
    const TypeKnob = select('Type', ['primary', 'success', 'danger', 'warning'])
    return <Alert text={TextKnob} type={TypeKnob} />
  })
