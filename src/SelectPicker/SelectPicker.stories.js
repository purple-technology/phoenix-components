import React from 'react'
import { storiesOf } from '@storybook/react'
import SelectPicker from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

const DEMO_IMAGE = 'https://image.flaticon.com/icons/svg/566/566944.svg'
const OPTIONS = [
  { value: 'secondary', image: DEMO_IMAGE, label: 'Secondary education' },
  { value: 'primary', image: DEMO_IMAGE, label: 'Primary education' },
  { value: 'university', image: DEMO_IMAGE, label: 'University education' }
]
const OPTIONS_NO_IMAGE = [
  { value: 'secondary', label: 'Secondary education' },
  { value: 'primary', label: 'Primary education' },
  { value: 'university', label: 'university education' }
]

storiesOf('Select picker', module)
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
    const ErrorKnob = text('Error', '')
    return (
      <SelectPicker
        label="Select something"
        value="secondary"
        error={ErrorKnob}
        onChange={e => console.log(e)}
        options={OPTIONS_NO_IMAGE}
      />
    )
  })
  .add('With images', () => {
    const ErrorKnob = text('Error', '')
    return (
      <SelectPicker
        label="Select something!"
        value="secondary"
        error={ErrorKnob}
        onChange={e => console.log(e)}
        options={OPTIONS}
      />
    )
  })
