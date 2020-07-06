import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import FileUpload from './index'

import { STORY_PARAMS } from '../globals'
import ThemeSettings from '../ThemeSettings'

const theme = ThemeSettings.getTheme()

storiesOf('Components/File upload', module)
  .addParameters(STORY_PARAMS)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: '50px auto' }}>{storyFn()}</div>
  ))
  .add('Default', () => {
    const theme = ThemeSettings.getTheme()
    const ColorKnob = text('Color', theme.colors.primary)
    const ErrorKnob = text('Error', '')
    const LabelKnob = text('Label', '')
    const AdditiveKnob = boolean('additive', false)
    return (
      <FileUpload
        label={LabelKnob}
        color={ColorKnob}
        onFileRemove={file => console.log(file)}
        onFileDrop={files => console.log(files)}
        error={ErrorKnob}
        additive={AdditiveKnob}
      />
    )
  })
