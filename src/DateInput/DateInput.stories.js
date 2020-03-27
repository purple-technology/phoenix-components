import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import DateInput from './index'

storiesOf('Components|Date input', module)
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
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const ErrorKnob = text('Error', null)
    const LabelKnob = text('Label', null)
    return (
      <DateInput
        label={LabelKnob}
        error={ErrorKnob}
        onChange={val => console.log(val)}
      />
    )
  })
