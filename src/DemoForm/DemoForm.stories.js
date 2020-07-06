import React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'
import { Store, StateDecorator } from '@sambego/storybook-state'

import Button from '../Button'
import DemoForm from './index'
import ThemeSettings from '../ThemeSettings'
import phoenixTheme, { exampleTheme } from '../phoenixTheme'

const store = new Store({
  default: true
})

storiesOf('Demo/DemoForm', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => {
              const theme = store.get('default') ? phoenixTheme : exampleTheme
              ThemeSettings.setTheme(theme)
              store.set({ default: !store.get('default') })
              forceReRender()
            }}
          >
            Toggle Theme
          </Button>
        </div>
        <DemoForm />
      </>
    )
  })
