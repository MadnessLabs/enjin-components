import '@ionic/core';
import { Component, State } from "@stencil/core";

import { docs } from '../../docs';

@Component({
  tag: "enjin-gallery",
  styleUrl: "gallery.css"
})
export class Gallery {
  docs: any = docs;
  
  @State()
  currentProps: any = {};

  updateProp(event, component, prop) {
    if (!this.currentProps[component.tag]) {
      this.currentProps[component.tag] = {};
    }
    console.log(event.data);
    this.currentProps[component.tag][prop.name] = event.data;
    this.currentProps = {...this.currentProps};
    console.log(this.currentProps);
  }

  render() {
    console.log("I rendered");
    return this.docs && this.docs.components && this.docs.components.length > 0
      ? this.docs.components.map(component =>{ 
        console.log(this.currentProps[component.tag] ? this.currentProps[component.tag] : null);
        return (
          <div>
            <h1>{component.tag}</h1>
            <h2>Props</h2>
            <ul>
              {component.props && component.props.length > 0
                ? component.props.map(prop => (
                    <li>
                      {prop.name} ({prop.type}) - {prop.docs}
                      <input type="text" name={`${component.tag}_${prop.name}`} onInput={event => this.updateProp(event, component, prop)} />
                    </li>
                  ))
                : null}
            </ul>
            <h2>Examples</h2>
            {h(component.tag, this.currentProps[component.tag] ? {...this.currentProps[component.tag]} : null)}
            <enjin-sidebar></enjin-sidebar>
          </div>
        )})
      : null;
  }
}
