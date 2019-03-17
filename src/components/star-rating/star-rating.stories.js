import { storiesOf } from '@storybook/html';
import { withActions } from "@storybook/addon-actions";

storiesOf('Star Rating', module)
  .addDecorator(withActions("enjinStarRating"))
  .add('Default', () => '<enjin-star-rating></enjin-star-rating>');