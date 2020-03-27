import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import Button from './index'

import { STORY_PARAMS } from '../globals'

storiesOf('Components|Button', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const SizeKnob = select('Size', ['normal', 'big'])
    const LabelKnob = text('Label', 'Click me!')
    const ColorKnob = text('Color', '#562878')
    const DisabledKnob = boolean('Disabled', false)
    return (
      <Button
        label={LabelKnob}
        size={SizeKnob}
        color={ColorKnob}
        disabled={DisabledKnob}
      />
    )
  })
  .add('As Link', () => {
    const SizeKnob = select('Size', ['normal', 'big'])
    const LabelKnob = text('Label', 'Click me!')
    const ColorKnob = text('Color', '#562878')
    const DisabledKnob = boolean('Disabled', false)
    const LinkKnob = text('Link', 'https://www.google.com/')
    return (
      <Button
        link={LinkKnob}
        label={LabelKnob}
        size={SizeKnob}
        color={ColorKnob}
        disabled={DisabledKnob}
      />
    )
  })
