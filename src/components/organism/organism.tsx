import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'enjin-organism',
  styleUrl: 'organism.css',
  shadow: true
})
export class Organism {
  /**
   * An interval loop to watch the frame size
   */
  frameWatcher: NodeJS.Timer;
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
   * Is the frame in synopsis Mode?
   */
  @State()
  synopsisMode = true;
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
   * Expand organism to show preview frame and props info
   */
  @Method()
  async viewMore() {
    this.synopsisMode = false;
    this.startFrameWatcher();
  }

  /**
   * Shrink organism to only show name and description
   */
  @Method()
  async viewLess() {
    this.synopsisMode = true;
    this.stopFrameWatcher();
  }

  /**
   * Toggle the frame to fullscreen and back to responsive
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

  /**
   * Start a set interval loop to watch the frame size
   */
  startFrameWatcher() {
    this.updateFrameSize();
    this.frameWatcher = setInterval(() => {
      this.updateFrameSize();
    }, 300);
  }

  /**
   * Stop frame size watcher
   */
  stopFrameWatcher() {
    clearInterval(this.frameWatcher);
  }

  render() {
    return (
      <div class={this.synopsisMode ? 'synopsis' : this.fullscreenMode ? "flex-grid fullscreen" : "flex-grid"}>
        <div class="col info">
          <a href="#" class="more-button" onClick={() => this.viewMore()}>More</a>
          <a href="#" class="less-button" onClick={() => this.viewLess()}>Less</a>
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
        <div class="col tools">
          <div class="frame" ref={(el: HTMLElement) =>  this.frameEl = el}>
            <slot />
          </div>
          <a href="#" class="resize-button" onClick={event => this.resizeToggle(event)}>
              <span>{this.frameSize.width}px X {this.frameSize.height}px</span>
              <b>{this.fullscreenMode ? '[shrink]' : '[EXPAND]' }️</b>
            </a>
        </div>
      </div>
    );
  }
}
