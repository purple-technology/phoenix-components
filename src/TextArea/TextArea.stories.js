import React from 'react'
import { storiesOf } from '@storybook/react'
import { Store, StateDecorator } from '@sambego/storybook-state'
import { boolean, withKnobs, text, number } from '@storybook/addon-knobs'

import TextArea from './index'

import { STORY_PARAMS } from '../globals'

const store = new Store({
  value: ''
})

storiesOf('Components/Textarea', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(StateDecorator(store))
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const ErrorKnob = text('Error', '')
    const LabelKnob = text('Label', 'Enter text')
    const RowsKnob = number('Rows', 3)
    const ContentRightKnob = text('Content Right', '')
    const WithBorderKnob = boolean('withBorder', false)
    return (
      <TextArea
        label={LabelKnob}
        error={ErrorKnob}
        rows={RowsKnob}
        value={store.get('value')}
        onChange={ev => store.set({ value: ev.target.value })}
        contentRight={ContentRightKnob}
        withBorder={WithBorderKnob}
      />
    )
  })
  .add('With border', () => {
    const ErrorKnob = text('Error', '')
    const LabelKnob = text('Label', 'Enter text')
    const RowsKnob = number('Rows', 3)
    const ContentRightKnob = text('Content Right', '')
    return (
      <TextArea
        label={LabelKnob}
        withBorder
        error={ErrorKnob}
        rows={RowsKnob}
        value={store.get('value')}
        onChange={ev => store.set({ value: ev.target.value })}
        contentRight={ContentRightKnob}
      />
    )
  })
