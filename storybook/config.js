import { configure, addParameters, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

function loadStories() {
  const req = require.context("../src", true, /.stories.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);

addParameters({
  options: {
    name: "Phoenix components",
    /* url: packageJson.repository.url, */
    showAddonPanel: false
  }
})

configure(loadStories, module)
