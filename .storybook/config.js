import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

const req = require.context("../src/__stories__", true, /-story\.js$/);

setOptions({
  name: "Edenlab Components",
  url: "https://github.com/edenlabllc/react-components"
});

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
