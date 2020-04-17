import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
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
    return <Alert text={TextKnob} />
  })
