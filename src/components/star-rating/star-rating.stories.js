import { storiesOf } from '@storybook/html';
import { withActions } from "@storybook/addon-actions";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

import readme from "./readme.md";

const storyOptions = {
  notes: {
    markdown: readme
  }
};

storiesOf('Star Rating', module)
  .addDecorator(withActions("enjinStarRating"))
  .addDecorator(withKnobs)
  .addParameters({ jest: ["star-rating"] })
  .add('Default', () => '<enjin-star-rating></enjin-star-rating>', storyOptions)
  .add('With Rating', () => {
    const starRatingEl = document.createElement('enjin-star-rating');
    starRatingEl.value = number('value', 3);

    return starRatingEl;
  }, storyOptions)
  .add('Disabled', () => {
    const starRatingEl = document.createElement('enjin-star-rating');
    starRatingEl.disabled = boolean('disabled', true);

    return starRatingEl;
  }, storyOptions);