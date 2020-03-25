import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import Button from './index'

storiesOf('Button', module)
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
