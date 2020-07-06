import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Store, StateDecorator } from '@sambego/storybook-state'

import CheckBox from './index'
import { STORY_PARAMS } from '../globals'
import ThemeSettings from '../ThemeSettings'

const theme = ThemeSettings.getTheme()

const store = new Store({
  checked: false
})

storiesOf('Components/Checkbox', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(StateDecorator(store))
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const ColorKnob = text('Color', theme.colors.primary)
    return (
      <CheckBox
        label="Click me!"
        checked={store.get('checked')}
        onChange={ev => {
          store.set({ checked: !store.get('checked') })
        }}
        color={ColorKnob}
      />
    )
  })
