import React from 'react'
import { storiesOf } from '@storybook/react'
import useState from 'storybook-addon-state'
import CheckBox from './index'

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
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const [checked, setChecked] = useState('checked', false)
    return (
      <CheckBox
        label="Click me!"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    )
  })
