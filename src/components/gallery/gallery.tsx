import '@stencil/router';
import { Component, State } from "@stencil/core";

import { docs } from '../../docs';

@Component({
  tag: "enjin-gallery",
  styleUrl: "gallery.css",
  shadow: true
})
export class Gallery {
  docs: any = docs;
  
  @State()
  currentProps: any = {};

  updateProp(event, component, prop) {
    if (!this.currentProps[component.tag]) {
      this.currentProps[component.tag] = {};
    }
    this.currentProps[component.tag][prop.name] = event.data;
    this.currentProps = {...this.currentProps};
  }

  render() {
    return [
    <enjin-sidebar components={this.docs && this.docs.components ? this.docs.components : null} />,
    <stencil-router id="router">
      {this.docs && this.docs.components ? this.docs.components.map((component) => 
        <stencil-route url={`/organism/${component.tag}`} component='enjin-organism' componentProps={{component}} />
      ) : null}
    </stencil-router>
    ];
  }
}
