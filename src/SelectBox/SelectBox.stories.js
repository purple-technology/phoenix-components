import React from 'react'
import { storiesOf } from '@storybook/react'
import { Store, StateDecorator } from '@sambego/storybook-state'

import SelectBox from './index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

const store = new Store({
  value: ''
})

storiesOf('Selectbox', module)
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
    const LabelKnob = text('Label', 'Select workout')
    const ErrorKnob = text('Error', '')
    const SuccessKnob = boolean('Success', '')
    const DisableAbsolutePositionErrorKnob = boolean(
      'Disable Absolute Position Error',
      false
    )

    return (
      <SelectBox
        label={LabelKnob}
        value={store.get('value')}
        error={ErrorKnob}
        onChange={ev => store.set({ value: ev })}
        options={[
          { value: 'legs', label: 'Leg day' },
          { value: 'chest', label: 'Chest day' }
        ]}
        success={SuccessKnob}
        disableAbsolutePositionError={DisableAbsolutePositionErrorKnob}
      />
    )
  })
