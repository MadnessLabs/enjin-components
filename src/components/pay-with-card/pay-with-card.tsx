import { Component, Event, EventEmitter, Listen, Prop, State } from "@stencil/core";

@Component({
  tag: "enjin-pay-with-card",
  styleUrl: "pay-with-card.css"
})
export class PayWithCard {
  stripe: stripe.Stripe;

  @Event() enjinCardSubmit: EventEmitter;

  @Prop() stripeKey: string;

  @State() card: stripe.elements.Element;
  @State() error: string;

  @Listen("submit")
  onFormSubmit(event) {
    event.preventDefault();

    this.stripe.createToken(this.card).then(result => {
      if (result.error) {
        this.error = result.error.message;
      } else {
        this.enjinCardSubmit.emit({event, token: result.token});
      }
    });
  }

  componentDidLoad() {
    if (this.stripeKey) {
      this.initializeStripeElements();
    } else {
      alert("Please provide a Stripe key!");
    }
  }

  initializeStripeElements() {
    this.stripe = Stripe(this.stripeKey);
    const elements = this.stripe.elements();
    const style: any = {
      base: {
        color: "#32325d",
        lineHeight: "18px",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };

    this.card = elements.create("card", { style: style });
    this.card.mount("#card-element");
    this.card.on("change", event => {
      this.error = event.error ? event.error.message : null;
    });
  }

  render() {
    return (
      <form action="/charge" method="post" id="payment-form">
        <div class="form-row">
          <label htmlFor="card-element">Credit or debit card</label>
          <div id="card-element" />
          <div role="alert">{this.error}</div>
        </div>

        <button>Submit Payment</button>
      </form>
    );
  }
}
