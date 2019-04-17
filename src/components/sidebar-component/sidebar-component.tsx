import { Component, Event, EventEmitter, Prop } from '@stencil/core';

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

  setPhase(event, component: {
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
  }, phaseName?: string) {
    event.preventDefault();
    window.history.pushState(null, this.component.tag, `/organism/${this.component.tag}`);
    this.enjinSetPhase.emit({event, component, phaseName});
  }

  render() {
    return this.component ? (
      <div>
        <a href="#" onClick={(event) => this.setPhase(event, this.component)}>
          {this.component.tag}
        </a>
        {this.component.phases && Object.keys(this.component.phases).map((phaseName) =>
          <a href="#" onClick={(event) => this.setPhase(event, this.component, phaseName)}>
            {phaseName}
          </a>
        )}
      </div>
      
    ) : null;
  }
}