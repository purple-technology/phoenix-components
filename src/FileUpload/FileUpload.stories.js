import React from "react"
import { storiesOf } from "@storybook/react"
import { Store, StateDecorator } from "@sambego/storybook-state";
import { withKnobs, text } from '@storybook/addon-knobs';

import FileUpload from "./index"

const store = new Store({
    value: ""
});

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
    .addDecorator(StateDecorator(store))
    .addDecorator(withKnobs)
    .addDecorator(storyFn =>
        <div style={{ margin: "50px auto" }}>
            {storyFn()}
        </div>
    )
    .add('Default', () => {
        const ErrorKnob = text('Error', '');
        const LabelKnob = text('Label', 'Enter text');
        return (<FileUpload label={LabelKnob} error={ErrorKnob} onChange={(ev) => console.log("ev", ev)} />);
    })


