import React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Store, StateDecorator } from '@sambego/storybook-state'

import SelectPicker from './index'
import { STORY_PARAMS } from '../globals'
import theme from '../theme'

const store = new Store({
  selected: ''
})

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

store.subscribe(state => {
  forceReRender()
})
storiesOf('Components/Select picker', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(StateDecorator(store))
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const LabelKnob = text('Label', 'Select something!')
    const ErrorKnob = text('Error', '')
    const ColorKnob = text('Color', theme.colors.primary)
    return (
      <SelectPicker
        label={LabelKnob}
        value={store.get('selected')}
        error={ErrorKnob}
        onChange={e => {
          store.set({ selected: e })
        }}
        borderColor={ColorKnob}
        options={OPTIONS_NO_IMAGE}
      />
    )
  })
  .add('With MultiSelect', () => {
    const LabelKnob = text('Label', 'Select something!')
    const ErrorKnob = text('Error', '')
    const ColorKnob = text('Color', theme.colors.primary)
    return (
      <SelectPicker
        label={LabelKnob}
        value={store.get('selected')}
        error={ErrorKnob}
        onChange={e => {
          store.set({ selected: e })
        }}
        options={OPTIONS_NO_IMAGE}
        borderColor={ColorKnob}
        multiSelect
      />
    )
  })
  .add('With images', () => {
    const LabelKnob = text('LabelKnob', 'Select something!')
    const ErrorKnob = text('Error', '')
    const ImageSizeKnob = text('Image Size', '40px')
    const ColorKnob = text('Color', theme.colors.primary)
    return (
      <SelectPicker
        label={LabelKnob}
        value={store.get('selected')}
        error={ErrorKnob}
        onChange={e => store.set({ selected: e })}
        options={OPTIONS}
        imageSize={ImageSizeKnob}
        borderColor={ColorKnob}
      />
    )
  })
