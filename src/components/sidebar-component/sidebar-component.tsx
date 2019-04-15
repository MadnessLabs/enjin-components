import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'enjin-sidebar-component',
  styleUrl: 'sidebar-component.css',
  shadow: true
})
export class EnjinSidebarComponent {
  @Prop() component: {
    docs: string;
    docsTags: any[];
    encapsulation: string;
    events: any[];
    methods: any[];
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
      <a href={`/organism/${this.component.tag}`}>
        {this.component.tag}
      </a>
    ) : null;
  }
}