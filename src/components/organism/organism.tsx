import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'enjin-organism',
  styleUrl: 'organism.css',
  shadow: true
})
export class Organism {
  /**
   * The name of the organism
   */
  @Prop()
  name: string;
  /**
   * A description of what the organism does
   */
  @Prop()
  description?: string;
  /**
   * A list of props with descriptions
   */
  @Prop()
  propList?: {
    /**
     * The name of the prop
     */
    name: string;
    /**
     * A description of the prop
     */
    description: string;
  }[] = [];

  /**
   * Is the frame in fullscreen mode?
   */
  @State()
  fullscreenMode = false;

  /**
   * Toggle the frame to fullscreen and back to 320px
   */
  resizeToggle(event) {
    event.preventDefault();
    this.fullscreenMode = !this.fullscreenMode;
  }

  render() {
    return (
      <div class={this.fullscreenMode ? "flex-grid fullscreen" : "flex-grid"}>
        <div class="col info">
          <h2>{this.name}</h2>
          {this.description ? <p>{this.description}</p> : null}
          <ul>
            {this.propList.map(prop => (
              <li>
                {prop.name} - {prop.description}
              </li>
            ))}
          </ul>
        </div>
        <div class="col">
          <div class="frame">
            <slot />
            <a href="#" class="resize-button" onClick={event => this.resizeToggle(event)}>
              {this.fullscreenMode ? '➡️' : '↔️' }️
            </a>
          </div>
        </div>
      </div>
    );
  }
}
