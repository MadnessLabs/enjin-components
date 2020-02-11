import { addParameters, configure, addDecorator } from "@storybook/html";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withActions, configureActions } from "@storybook/addon-actions";
import { withLinks } from "@storybook/addon-links";
import { withTests } from "@storybook/addon-jest";
import results from "../jest-test-results.json";
// import buildStencilStories from "./stories-generator";

addParameters({
  options: {
    panelPosition: "right"
  },

  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "light", value: "#eeeeee" },
    { name: "gainsboro", value: "#DCDCDC" },
    { name: "lightgrey", value: "#D3D3D3" },
    { name: "silver", value: "#C0C0C0" },
    { name: "darkgrey", value: "#A9A9A9" },
    { name: "grey", value: "#808080" },
    { name: "dimgrey", value: "#696969" },
    { name: "lightslategrey", value: "#778899" },
    { name: "slategrey", value: "#708090" },
    { name: "darkslategrey", value: "#2F4F4F" },
    { name: "dark", value: "#555555" },
    { name: "black", value: "#000000" }
  ]
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withLinks);
addDecorator(withActions("click"));
addDecorator(
  withTests({
    results,
    filesExt: ".spec.ts"
  })
);

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20
});

const loader = require("../loader/index.cjs.js");
// const general_stories = require.context('../general-stories', true, /.\.stories\.js$/);
const local_stories = require.context(
  "../src",
  true,
  /\/[^/ ]+?\/.+\/.+\.stories\.js$/
);
// const auto_generated_stories = [
//   {
//     name: "ALL COMPONENTS|",
//     components: require.context(
//       "../dist/collection",
//       true,
//       /\/[^/ ]+?\/(?:[^/]+\/)*?([^/]+)\/\1\.js$/
//     ),
//     stories: require.context(
//       "../dist/collection",
//       true,
//       /\/[^/ ]+?\/(?:[^/]+\/)*?([^/]+)\/\1[^/]*?\.stories\.js$/
//     ),
//     notes: require.context("../src", true, /\/[^/ ]+?\/.+\/.+\.md$/)
//   }
// ];

const loadStories = () => {
  loader.defineCustomElements(window);
  // general_stories.keys().forEach(filename => general_stories(filename));
  local_stories.keys().forEach(filename => local_stories(filename));
  // auto_generated_stories.forEach(({ name, components, stories, notes }) => {
  //   buildStencilStories(name, components, stories, notes);
  // });
};

configure(loadStories, module);
