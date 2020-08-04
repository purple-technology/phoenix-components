import React from 'react'
import { storiesOf } from '@storybook/react'
import { Store, StateDecorator } from '@sambego/storybook-state'

import SelectBox from './index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { STORY_PARAMS } from '../globals'

const store = new Store({
  value: ''
})

storiesOf('Components/Selectbox', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(StateDecorator(store))
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const LabelKnob = text('Label', 'Select workout')
    const DescriptionKnob = text('Description', '')
    const ErrorKnob = text('Error', '')
    const SuccessKnob = boolean('Success', false)
    const RTLKnob = boolean('RTL mode', false)

    return (
      <SelectBox
        label={LabelKnob}
        description={DescriptionKnob}
        value={store.get('value')}
        error={ErrorKnob}
        RTL={RTLKnob}
        onChange={ev => store.set({ value: ev })}
        options={[
          { value: 'legs', label: 'Leg day' },
          { value: 'chest', label: 'Chest day' }
        ]}
        success={SuccessKnob}
      />
    )
  })
