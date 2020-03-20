import React from 'react'
import { storiesOf } from '@storybook/react'
import { Store, StateDecorator } from '@sambego/storybook-state'
import { withKnobs, text } from '@storybook/addon-knobs'

import Input from './index'

const store = new Store({
  value: ''
})

storiesOf('Text input', module)
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
  .addDecorator(StateDecorator(store))
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const ErrorKnob = text('Error', '')
    const LabelKnob = text('Label', 'Enter text')
    const ContentRightKnob = text('Content Right', '')
    const HelperTextKnob = text('Helper Text', '')
    return (
      <Input
        label={LabelKnob}
        error={ErrorKnob}
        helperText="You can use your name"
        value={store.get('value')}
        onChange={ev => store.set({ value: ev.target.value })}
        contentRight={ContentRightKnob}
        helperText={HelperTextKnob}
      />
    )
  })
