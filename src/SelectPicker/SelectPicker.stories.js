import React from "react"
import { storiesOf } from "@storybook/react"
import SelectPicker from "./index"

const DEMO_IMAGE = "https://image.flaticon.com/icons/svg/566/566944.svg"
const OPTIONS = [{ value: "kek", image: DEMO_IMAGE, label: "Secondary education" }, { value: "bur", image: DEMO_IMAGE, label: "Primary education" }]
const OPTIONS_NO_IMAGE = [{ value: "kek", label: "Secondary education" }, { value: "bur", label: "Primary education" }]

storiesOf('Select picker', module)
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
        return (<SelectPicker label="Select something!"
            value="kek"
            onChange={(e) => console.log(e)}
            options={OPTIONS_NO_IMAGE} />)
    })
    .add('With images', () => {
        return (<SelectPicker label="Select something!"
            value="kek"
            onChange={(e) => console.log(e)}
            options={OPTIONS} />)
    })


