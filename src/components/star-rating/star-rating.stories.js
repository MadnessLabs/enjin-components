import { storiesOf } from '@storybook/html';
import { withActions } from "@storybook/addon-actions";

import readme from "./readme.md";

storiesOf('Star Rating', module)
  .addDecorator(withActions("enjinStarRating"))
  .add('Default', () => '<enjin-star-rating></enjin-star-rating>', {
    notes: {
      markdown: readme
    }
  });