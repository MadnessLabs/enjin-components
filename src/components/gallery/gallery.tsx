import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'enjin-gallery',
  styleUrl: 'gallery.css'
})
export class Gallery {

  @Listen('enjinStarRating')
  onStarRating(event) {
    console.log(event);
  }

  render() {
    return [
      <enjin-organism
        name="Pay with Card"
        description="A Stripe Elements card component"
        propList={[
          {
            name: 'stripeKey',
            description: 'The publishable Stripe key for the account you want to use'
          }
        ]}
      >
        <enjin-pay-with-card stripeKey="pk_test_G6ksY0dKXlgogvnitD0Wm1oc" />
      </enjin-organism>, 
      <enjin-organism
        name="Star Rating"
        description="A simple 5 star rating component"
        propList={[]}
      >
        <enjin-star-rating />
      </enjin-organism>, 
      <enjin-organism
      name="Star Rating Scoped"
      description="A simple 5 star rating component"
      propList={[]}
    >
      <enjin-star-rating-scoped />
    </enjin-organism>, 
    <enjin-organism
    name="Star Rating Shadow"
    description="A simple 5 star rating component"
    propList={[]}
  >
    <enjin-star-rating-shadow />
  </enjin-organism>, 
      <enjin-organism
        name="Test Component"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        propList={[
          {
            name: 'testOne',
            description: 'A test prop to do nothing'
          }
        ]}
      >
        <enjin-test-component />
      </enjin-organism>,
      <enjin-organism
        name="Test 2 Component"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        propList={[
          {
            name: 'testTwo',
            description: 'A test prop to do nothing'
          }
        ]}
      >
        <enjin-test-component />
      </enjin-organism>,
      <enjin-organism
        name="Test 3 Component"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        propList={[
          {
            name: 'testTwo',
            description: 'A test prop to do nothing'
          }
        ]}
      >
        <enjin-test-component />
      </enjin-organism>,
      <enjin-organism
        name="Test 4 Component"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        propList={[
          {
            name: 'testTwo',
            description: 'A test prop to do nothing'
          }
        ]}
      >
        <enjin-test-component />
      </enjin-organism>
    ];
  }
}
