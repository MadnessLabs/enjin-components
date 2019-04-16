import { Component, Prop, State } from '@stencil/core';


@Component({
  tag: 'enjin-organism',
  styleUrl: 'organism.css'
})
export class EnjinOrganism {

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

  @State() currentProps = {};

  updateProp(event, name: string) {
    this.currentProps[name] = event.target.value;
    this.currentProps = {...this.currentProps};
  }

  render() {
    return (
      <div class="organism-wrapper">
        <div>
          {this.component ? h(this.component.tag, {...this.currentProps}) : null}
        </div>
        <div class="sidebar">
          {this.component.props.map(prop => 
            <label>
              {prop.name} - {prop.docs}
              <input name={prop.name} onInput={event => this.updateProp(event, prop.name)} />
            </label>
          )}
        </div>
      </div>
    );
  }
}