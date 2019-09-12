import React from "react"
import { storiesOf } from "@storybook/react"
import { Store, StateDecorator } from "@sambego/storybook-state";

import SelectBox from "./index"

const store = new Store({
    value: ""
});

storiesOf('Selectbox', module)
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
    .addDecorator(storyFn =>
        <div style={{ margin: "50px auto" }}>
            {storyFn()}
        </div>
    )
    .add('Default', () => {
        return (<SelectBox label="Select something!"
            value={store.get("value")}
            onChange={(ev) => store.set({ value: ev })}
            options={[{ value: "Kek", label: "bur" }]} />)
    })


