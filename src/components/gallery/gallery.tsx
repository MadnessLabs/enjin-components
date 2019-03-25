import '@ionic/core';
import { Component } from "@stencil/core";

import { docs } from '../../docs';

@Component({
  tag: "enjin-gallery",
  styleUrl: "gallery.css"
})
export class Gallery {
  docs: any = docs;

  render() {
    return this.docs && this.docs.components && this.docs.components.length > 0
      ? this.docs.components.map(component => (
          <div>
            <h1>{component.tag}</h1>
            <h2>Props</h2>
            <ul>
              {component.props && component.props.length > 0
                ? component.props.map(prop => (
                    <li>
                      {prop.name} ({prop.type}) - {prop.docs}
                    </li>
                  ))
                : null}
            </ul>
            <h2>Examples</h2>
            {h(component.tag)}
          </div>
        ))
      : null;
  }
}
