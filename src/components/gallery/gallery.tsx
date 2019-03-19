import { Component, Listen } from "@stencil/core";

import docs from '../../core.json';

@Component({
  tag: "enjin-gallery",
  styleUrl: "gallery.css"
})
export class Gallery {
  @Listen("enjinStarRating")
  onStarRating(event) {
    console.log(event);
  }

  componentDidLoad() {
    console.log(docs);
  }

  render() {
    return docs && docs.components && docs.components.length > 0 ? docs.components.map(component => 
      <div>
        <h1>{component.tag}</h1>
        <h2>Props</h2>
        <ul>
          {component.props && component.props.length > 0 ? component.props.map(prop => 
            <li>{prop.name} ({prop.type}) - {prop.docs}</li>
          ) : null}
        </ul>
      </div>
    ) : null;
  }
}
