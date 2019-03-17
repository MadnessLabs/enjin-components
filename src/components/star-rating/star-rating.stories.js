import { storiesOf } from '@storybook/html';
import { withActions } from "@storybook/addon-actions";

import readme from "./readme.md";

storiesOf('Star Rating', module)
  .addDecorator(withActions("enjinStarRating"))
  .add('Default', () => '<enjin-star-rating></enjin-star-rating>', {
    notes: {
      markdown: readme
    }
  })
  .add('With Rating', () => {
    const starRatingEl = document.createElement('enjin-star-rating');
    starRatingEl.value = 3;

    return starRatingEl;
  }, {
    notes: {
      markdown: readme
    }
  })
  .add('Disabled', () => {
    const starRatingEl = document.createElement('enjin-star-rating');
    starRatingEl.disabled = true;

    return starRatingEl;
  }, {
    notes: {
      markdown: readme
    }
  });