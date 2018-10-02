import { Component } from '@stencil/core';

@Component({
  tag: 'enjin-gallery',
  styleUrl: 'gallery.css'
})
export class Gallery {
  render() {
    return [
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
      </enjin-organism>
    ];
  }
}
