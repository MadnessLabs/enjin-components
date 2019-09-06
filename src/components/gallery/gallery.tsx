import '@stencil/router';
import { Component, Element, State, h } from "@stencil/core";
import Slideout from "slideout";
import marked from 'marked';

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
  @State()
  currentDoc: string;
  
  toggleSidebar(event) {
    if (event) {
      event.preventDefault();
    }
    this.slideout.toggle();
  }

  viewDocs(event) {
    if (event) {
      event.preventDefault();
    }
    let docsMarkdown = '';
    for(const component of this.components) {
      if (window.location.pathname.split('/')[2] === component.tag) {
        docsMarkdown = component.readme;
        break;
      }
    }
    this.currentDoc = marked(docsMarkdown);
  }

  async getComponentPhases() {
    let promises = [];
    this.components.map((component, index) => {
    this.components[index].url = `/organism/${component.tag}/:phase?`;
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
          <a class="docs-button" onClick={(event) => this.viewDocs(event)}>Docs</a>
        </header>
        <div class="docs-panel" innerHTML={this.currentDoc} />
        <stencil-router id="router">
          {this.components.map((component) => 
            <stencil-route url={component.url} component='enjin-organism' componentProps={{component}} />
          )}
        </stencil-router>
      </main>
    ];
  }
}
