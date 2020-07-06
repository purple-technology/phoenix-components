import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import Button from './index'
import LinkButton from './LinkButton'

import { STORY_PARAMS } from '../globals'

import ThemeSettings from '../ThemeSettings'

const theme = ThemeSettings.getTheme()

storiesOf('Components/Button', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const SizeKnob = select('Size', ['normal', 'big'])
    const LabelKnob = text('Label', 'Click me!')
    const BackgroundKnob = text('Background', theme.colors.primary)
    const ColorKnob = text('Color', theme.colors.white)
    const DisabledKnob = boolean('Disabled', false)
    return (
      <Button
        background={BackgroundKnob}
        color={ColorKnob}
        size={SizeKnob}
        disabled={DisabledKnob}
      >
        {LabelKnob}
      </Button>
    )
  })
  .add('As Link', () => {
    const SizeKnob = select('Size', ['normal', 'big'])
    const LabelKnob = text('Label', 'Click me!')
    const BackgroundKnob = text('Background', theme.colors.primary)
    const ColorKnob = text('Color', theme.colors.white)
    const LinkKnob = text('Link', 'https://www.google.com/')
    const TargetKnob = text('Target', '_blank')
    return (
      <LinkButton
        link={LinkKnob}
        target={TargetKnob}
        background={BackgroundKnob}
        color={ColorKnob}
        size={SizeKnob}
      >
        {LabelKnob}
      </LinkButton>
    )
  })
