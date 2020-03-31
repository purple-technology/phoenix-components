import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import DateInput from './index'

import { STORY_PARAMS } from '../globals'

storiesOf('Components|Date input', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const ErrorKnob = text('Error', null)
    const LabelKnob = text('Label', null)
    const LocaleKnob = select('Locale', ['eu', 'us'])
    return (
      <DateInput
        label={LabelKnob}
        error={ErrorKnob}
        onChange={val => console.log(val)}
        locale={LocaleKnob}
      />
    )
  })
