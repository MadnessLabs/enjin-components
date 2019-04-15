import '@stencil/router';
import { Component, Element, State } from "@stencil/core";
import Slideout from "slideout";

import { docs } from '../../docs';

@Component({
  tag: "enjin-gallery",
  styleUrl: "gallery.css",
  scoped: true
})
export class Gallery {
  docs: any = docs;
  slideout: Slideout;

  @Element() galleryEl: HTMLEnjinGalleryElement;
  
  @State()
  currentProps: any = {};

  updateProp(event, component, prop) {
    if (!this.currentProps[component.tag]) {
      this.currentProps[component.tag] = {};
    }
    this.currentProps[component.tag][prop.name] = event.data;
    this.currentProps = {...this.currentProps};
  }
  
  toggleSidebar(event) {
    if (event) {
      event.preventDefault();
    }
    this.slideout.toggle();
  }

  componentDidLoad() {
    this.slideout = new Slideout({
      panel: this.galleryEl.querySelector('#panel'),
      menu: this.galleryEl.querySelector('#menu'),
      padding: 256,
      tolerance: 70
    });
  }

  render() {
    return [
      <nav id="menu">
        <enjin-sidebar components={this.docs && this.docs.components ? this.docs.components : null} />
      </nav>,
      <main id="panel">
        <header>
          <a class="menu-button" onClick={(event) => this.toggleSidebar(event)}>
            &#9776;
          </a>
          <h2>Enjin</h2>
        </header>
        <stencil-router id="router">
          {this.docs && this.docs.components ? this.docs.components.map((component) => 
            <stencil-route url={`/organism/${component.tag}`} component='enjin-organism' componentProps={{component}} />
          ) : null}
        </stencil-router>
      </main>
    ];
  }
}
