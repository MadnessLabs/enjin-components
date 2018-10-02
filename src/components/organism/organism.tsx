import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'enjin-organism',
  styleUrl: 'organism.css',
  shadow: true
})
export class Organism {
  @Element() organismEl: HTMLEnjinOrganismElement;
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
   * The fame HTML element
   */
  @State() frameEl: HTMLElement;
  /**
   * Is the frame in fullscreen mode?
   */
  @State()
  fullscreenMode = false;
  /**
   * The current size of the frame
   */
  @State()
  frameSize: {
    height: number,
    width: number
  } = {
    height: 0,
    width: 0
  };

  /**
   * Toggle the frame to fullscreen and back to 320px
   */
  resizeToggle(event) {
    event.preventDefault();
    this.fullscreenMode = !this.fullscreenMode;
    setTimeout(() => {
      this.updateFrameSize();
    }, 10);
  }

  /**
   * Update the frameSize from height and width of the frame
   */
  updateFrameSize() {
    if (this.frameSize.height === this.frameEl.clientHeight && this.frameSize.width === this.frameEl.clientWidth) {
      return false;
    }
    this.frameSize = {
      height: this.frameEl.clientHeight,
      width: this.frameEl.clientWidth
    };
  }

  componentDidLoad() {
    this.frameEl = this.organismEl.shadowRoot.querySelector('.frame');
    setInterval(() => {
      this.updateFrameSize();
    }, 1000);
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
              <span>{this.frameSize.width}px X {this.frameSize.height}px</span>
              <b>{this.fullscreenMode ? '[shrink]' : '[EXPAND]' }️</b>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
