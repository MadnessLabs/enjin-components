import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'enjin-sidebar-component',
  styleUrl: 'sidebar-component.css',
  shadow: true
})
export class EnjinSidebarComponent {
  @Event() enjinSetPhase: EventEmitter<any>;

  @Prop() component: {
    docs: string;
    docsTags: any[];
    encapsulation: string;
    events: any[];
    methods: any[];
    phases: any;
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
        <div class="component-phases">
          {this.component.phases && Object.keys(this.component.phases).map((phaseName) =>
            <a href={`/organism/${this.component.tag}/${phaseName}`}>
              {this.component.phases[phaseName].name ? this.component.phases[phaseName].name : phaseName}
            </a>
          )}
        </div>
      </div>
      
    ) : null;
  }
}