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
  components: any = [];
  
  toggleSidebar(event) {
    if (event) {
      event.preventDefault();
    }
    this.slideout.toggle();
  }

  async getComponentPhases() {
    let promises = [];
    this.components.map((component, index) => {
    promises.push(new Promise((resolve, reject) => {
        require([`${component.tag.replace(component.tag.split('-')[0]+'-', '')}.phases`], (phases) => {
          this.components[index].phases = phases.default;
          resolve(phases.default);
        }, () => {
          console.log(`${component.tag} phases not found!`);
          reject(`${component.tag} phases not found!`);
        });
      }));
    });

    const response = Promise.all(promises);
    this.components = [...this.components];

    return response;
  }

  async componentDidLoad() {
    this.components = this.docs && this.docs.components && this.docs.components ? this.docs.components : [];
    this.slideout = new Slideout({
      panel: this.galleryEl.querySelector('#panel'),
      menu: this.galleryEl.querySelector('#menu'),
      padding: 256,
      tolerance: 70
    });
    await this.getComponentPhases();
  }

  render() {
    return [
      <nav id="menu">
        <enjin-sidebar components={this.components} />
      </nav>,
      <main id="panel">
        <header>
          <a class="menu-button" onClick={(event) => this.toggleSidebar(event)}>
            &#9776;
          </a>
          <h2>Enjin</h2>
        </header>
        <stencil-router id="router">
          {this.components.map((component) => 
            <stencil-route url={`/organism/${component.tag}/:phase?`} component='enjin-organism' componentProps={{component}} />
          )}
        </stencil-router>
      </main>
    ];
  }
}
