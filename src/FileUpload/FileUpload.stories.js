import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from '@storybook/addon-knobs';
import FileUpload from "./index"


storiesOf('File upload', module)
    .addParameters({
        options: {
            showPanel: true,
            showNav: true,
            panelPosition: 'bottom'
        },
        info: {
            inline: true, header: false
        },
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn =>
        <div style={{ margin: "50px auto" }}>
            {storyFn()}
        </div>
    )
    .add('Default', () => {
        const ErrorKnob = text('Error', null);
        const LabelKnob = text('Label', null);
        return (<FileUpload label={LabelKnob} onFileRemove={file => console.log(file)} onFileDrop={files => console.log(files)} error={ErrorKnob} />);
    })


