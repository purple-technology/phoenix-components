import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import Alert from './index'

import { STORY_PARAMS } from '../globals'

storiesOf('Components/Alert', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const TitleKnob = text('Title', 'This is the title')
    const TextKnob = text('Text', 'This is an alert')
    const TypeKnob = select('Type', [
      'primary',
      'info',
      'success',
      'danger',
      'warning',
      'custom'
    ])
    const ContentColorKnob = text('ContentColor', 'black')
    const BackgroundColorKnob = text('BackgroundColor', 'lightgrey')
    const CenterContentKnob = boolean('Center Text', true)
    return (
      <Alert
        title={TitleKnob}
        text={TextKnob}
        type={TypeKnob}
        centerContent={CenterContentKnob}
        backgroundColor={BackgroundColorKnob}
        contentColor={ContentColorKnob}
      />
    )
  })
