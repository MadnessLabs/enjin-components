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
  tag: "enjin-star-rating-shadow",
  styleUrl: "star-rating-shadow.css",
  shadow: true
})
export class EnjinStarRatingShadow {
  @Element() starRatingEl: HTMLElement;

  @Event() ftStarRating: EventEmitter;

  @Prop() disabled = false;
  @Prop() name = "rating-shadow";
  @Prop() maxRating = 5;
  @Prop() value: string;

  @State() currentRating: number;

  onInput(event) {
    if (this.disabled) {
      return false;
    }
    this.currentRating = parseFloat(event.target.value);
    this.ftStarRating.emit({
      event,
      name: this.name,
      value: this.currentRating
    });
  }

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
            ? "star-active"
            : null
        }
      >
        <input
          type="radio"
          name={this.name}
          value={this.maxRating - index}
          onInput={(event) => this.onInput(event)}
        />
        &#9733;
      </label>
    ]);
  }
}
