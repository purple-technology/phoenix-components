import React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Store, StateDecorator } from '@sambego/storybook-state'

import TimezonePicker from './index'
import { STORY_PARAMS } from '../globals'
import theme from '../theme'

const store = new Store({
  selected: ''
})

store.subscribe(state => {
  forceReRender()
})
storiesOf('Components/Timezone picker', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(StateDecorator(store))
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const LabelKnob = text('Label', 'Pick a timezone!')
    const ErrorKnob = text('Error', '')
    const ColorKnob = text('Color', theme.colors.primary)
    return (
      <TimezonePicker
        label={LabelKnob}
        value={store.get('selected')}
        error={ErrorKnob}
        onChange={e => {
          store.set({ selected: e })
        }}
        borderColor={ColorKnob}
      />
    )
  })
