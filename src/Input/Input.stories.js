import React from 'react'
import { storiesOf } from '@storybook/react'
import { Store, StateDecorator } from '@sambego/storybook-state'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import Input from './index'

import { STORY_PARAMS } from '../globals'

const store = new Store({
  value: ''
})

storiesOf('Components/Text input', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(StateDecorator(store))
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const SuccessKnob = boolean('Success', false)
    const ErrorKnob = text('Error', '')
    const LabelKnob = text('Label', 'Enter text')
    const DescriptionKnob = text('Description', '')
    const DescriptionPlacementKnob = select('Description Placement', [
      'top',
      'bottom'
    ])
    const DescriptionFontSizeKnob = text('Description Font Size', '13px')
    const ContentRightKnob = text('Content Right', '')
    const HelperTextKnob = text('Helper Text', '')
    const DisableAbsolutePositionErrorKnob = boolean(
      'Disable Absolute Position Error',
      false
    )
    return (
      <Input
        label={LabelKnob}
        error={ErrorKnob}
        success={SuccessKnob}
        helperText="You can use your name"
        value={store.get('value')}
        onChange={ev => store.set({ value: ev.target.value })}
        contentRight={ContentRightKnob}
        helperText={HelperTextKnob}
        disableAbsolutePositionError={DisableAbsolutePositionErrorKnob}
        description={DescriptionKnob}
        descriptionPlacement={DescriptionPlacementKnob}
        descriptionFontSize={DescriptionFontSizeKnob}
      />
    )
  })
