import {
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";

@Component({
  tag: "enjin-star-rating",
  styleUrl: "star-rating.css"
})
export class EnjinStarRating {
  @Element() starRatingEl: HTMLElement;

  @Event() enjinStarRating: EventEmitter;

  /**
   * Whether or not the field is disabled
   */
  @Prop() disabled = false;
  /**
   * The name of the input
   */
  @Prop() name = "rating";
  /**
   * The max available star rating
   */
  @Prop() maxRating = 5;
  /**
   * The value of the rating input
   */
  @Prop() value: string;

  /**
   * The current rating set
   */
  @State() currentRating: number;

  onInput(event) {
    if (this.disabled) {
      return false;
    }
    this.currentRating = parseFloat(event.target.value);
    this.enjinStarRating.emit({
      event,
      name: this.name,
      value: this.currentRating
    });
  }

  /**
   * Set the current rating
   */
  @Method()
  async setCurrentRating(rating: any) {
    this.currentRating = parseFloat(rating);
  }

  @Watch("value")
  async onValueChange() {
    this.currentRating = parseFloat(this.value);
  }

  componentWillLoad() {
    this.currentRating = parseFloat(this.value ? this.value : "0");
  }

  componentDidLoad() {
    this.currentRating = parseFloat(this.value ? this.value : "0");
  }

  hostData() {
    return {
      class: this.disabled ? "star-rating is-disabled" : "star-rating",
      style: {
        "--star-rating-max": this.maxRating
      }
    };
  }


  render() {
    return [...Array(this.maxRating)].map((_radio, index) => [
      <label
        class={
          this.currentRating >= this.maxRating - index - 0.5
            && "star-active"
        }
      >
        <input
          type="radio"
          name={this.name}
          value={this.maxRating - index}
          onInput={this.onInput.bind(this)}
        />
        &#9733;
      </label>
    ]);
  }
}
