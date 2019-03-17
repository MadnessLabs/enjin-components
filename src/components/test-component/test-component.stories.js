import { storiesOf } from '@storybook/html';

import readme from "./readme.md";

storiesOf('Test Component', module)
  .add('Default', () => '<enjin-test-component></enjin-test-component>', {
    notes: {
      markdown: readme
    }
  });