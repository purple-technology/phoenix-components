import React from 'react'
import { storiesOf } from '@storybook/react'
import SelectPicker from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

import { STORY_PARAMS } from '../globals'

const DEMO_IMAGE = 'https://image.flaticon.com/icons/svg/566/566944.svg'
const OPTIONS = [
  {
    value: 'secondary',
    image: DEMO_IMAGE,
    label: 'Secondary education',
    description: 'Some school'
  },
  {
    value: 'primary',
    image: DEMO_IMAGE,
    label: 'Primary education',
    description: 'Basic education'
  },
  {
    value: 'university',
    image: DEMO_IMAGE,
    label: 'University education',
    description: 'More education than average'
  }
]
const OPTIONS_NO_IMAGE = [
  { value: 'secondary', label: 'Secondary education' },
  { value: 'primary', label: 'Primary education' },
  { value: 'university', label: 'university education' }
]

storiesOf('Components/Select picker', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const LabelKnob = text('Label', 'Select something!')
    const ErrorKnob = text('Error', '')
    return (
      <SelectPicker
        label={LabelKnob}
        value="secondary"
        error={ErrorKnob}
        onChange={e => console.log(e)}
        options={OPTIONS_NO_IMAGE}
      />
    )
  })
  .add('With MultiSelect', () => {
    const LabelKnob = text('Label', 'Select something!')
    const ErrorKnob = text('Error', '')
    return (
      <SelectPicker
        label={LabelKnob}
        value={['secondary']}
        error={ErrorKnob}
        onChange={e => console.log(e)}
        options={OPTIONS_NO_IMAGE}
        multiSelect
      />
    )
  })
  .add('With images', () => {
    const LabelKnob = text('LabelKnob', 'Select something!')
    const ErrorKnob = text('Error', '')
    const ImageSizeKnob = text('Image Size', '40px')
    return (
      <SelectPicker
        label={LabelKnob}
        value="secondary"
        error={ErrorKnob}
        onChange={e => console.log(e)}
        options={OPTIONS}
        imageSize={ImageSizeKnob}
      />
    )
  })
