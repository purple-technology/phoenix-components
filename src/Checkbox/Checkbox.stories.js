import React from "react"
import { storiesOf } from "@storybook/react"
import CheckBox from "./index"


storiesOf('Checkbox', module)
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
    .addDecorator(storyFn =>
        <div style={{ margin: "50px auto" }}>
            {storyFn()}
        </div>
    )
    .add('Default', () => {
        return (
            <CheckBox label="Click me!" />
        )
    })



