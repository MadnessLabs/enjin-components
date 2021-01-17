import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'enjin-sidebar-component',
  styleUrl: 'sidebar-component.css',
  shadow: true
})
export class EnjinSidebarComponent {
  @Event() enjinSetPreset: EventEmitter<any>;

  @Prop() component: {
    docs: string;
    docsTags: any[];
    encapsulation: string;
    events: any[];
    methods: any[];
    presets: any;
    props: {
      attr: string;
      default: any;
      docs: string;
      docsTags: any[];
      mutable: boolean;
      name: string;
      optional: boolean;
      reflectToAttr: boolean;
      required: boolean;
      type: string;
    }[];
    readme: string;
    slots: any[];
    styles: any[];
    tag: string;
    usage: any;
  };

  render() {
    return this.component ? (
      <div>
        <a href={`/organism/${this.component.tag}`}>
          {this.component.tag}
        </a>
        <div class="component-presets">
          {this.component.presets && Object.keys(this.component.presets).map((presetName) =>
            <a href={`/organism/${this.component.tag}/${presetName}`}>
              {this.component.presets[presetName].name ? this.component.presets[presetName].name : presetName}
            </a>
          )}
        </div>
      </div>
      
    ) : null;
  }
}