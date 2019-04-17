import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'enjin-organism',
  styleUrl: 'organism.css'
})
export class EnjinOrganism {

  @Prop({
    mutable: true
  }) component: {
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
  @Prop() match: MatchResults;

  @State() currentProps = {};

  setPhase(phaseName: string) {
    if (this.component.phases && this.component.phases[phaseName] && this.component.phases[phaseName].props) {
      this.currentProps = {...this.component.phases[phaseName].props};
    } else {
      this.currentProps = this.component.phases['default'] && this.component.phases['default'].props ? this.component.phases['default'].props : null;
    }
  }

  updateProp(event, name: string) {
    this.currentProps[name] = event.target.value;
    this.currentProps = {...this.currentProps};
  }
  
  componentDidLoad() {
    if (this.match && this.match.params && this.match.params.phase) {
      this.setPhase(this.match.params.phase);
    }
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