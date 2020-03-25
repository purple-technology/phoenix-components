import React from 'react'
import { storiesOf } from '@storybook/react'
import { Store, StateDecorator } from '@sambego/storybook-state'

import CheckBox from './index'

const store = new Store({
  checked: false
})

storiesOf('Checkbox', module)
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
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    return (
      <CheckBox
        label="Click me!"
        checked={store.get('checked')}
        onChange={ev => {
          store.set({ checked: !store.get('checked') })
        }}
      />
    )
  })
