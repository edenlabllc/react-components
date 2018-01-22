import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

const req = require.context("../src/__stories__", true, /-story\.js$/);

setOptions({
  name: "Edenlab Components",
  url: "https://github.com/edenlabllc/react-components",
  addonPanelInRight: true
});

addDecorator((story, context) => withInfo()(story)(context));
addDecorator(withKnobs);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
