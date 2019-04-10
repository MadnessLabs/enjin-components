import '@ionic/core';
import { Component, Prop } from "@stencil/core";

@Component({
  tag: "enjin-sidebar",
  styleUrl: "sidebar.css"
})
export class Sidebar {
  @Prop() components: any = [];

  render() {
    return <div>
      {this.components && this.components.length > 0
      && this.components.map(component =>
        h('enjin-sidebar-component', {component})
      )
     }
    </div>;
  }
}
