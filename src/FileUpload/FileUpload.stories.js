import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Store, StateDecorator } from '@sambego/storybook-state'

import FileUpload from './index'
import { STORY_PARAMS } from '../globals'
import theme from '../theme'

const store = new Store({
  files: []
})

storiesOf('Components/File upload', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(StateDecorator(store))
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const ColorKnob = text('Color', theme.colors.primary)
    const ErrorKnob = text('Error', '')
    const LabelKnob = text('Label', '')
    const AdditiveKnob = boolean('additive', false)
    return (
      <FileUpload
        files={store.get('files')}
        setFiles={files => store.set({ files })}
        label={LabelKnob}
        color={ColorKnob}
        onFileRemove={file => console.log(file)}
        onFileDrop={files => console.log(files)}
        error={ErrorKnob}
        additive={AdditiveKnob}
      />
    )
  })
