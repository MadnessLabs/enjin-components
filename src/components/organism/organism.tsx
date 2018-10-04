import { Component, Element, Listen, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'enjin-organism',
  styleUrl: 'organism.css',
  shadow: true
})
export class Organism {
  @Element() organismEl: HTMLEnjinOrganismElement;
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
   * Listen for hash change and show everything is hash is #all
   */
  @Listen('window:hashchange')
  onhashchange() {
    if (window.location.hash === '#all') {
      this.viewMore();
    }
  }

  /**
   * Expand organism to show preview frame and props info
   */
  @Method()
  async viewMore(options = {scrollIntoView: true}) {
    this.synopsisMode = false;
    this.startFrameWatcher();
    if (options.scrollIntoView) {
      setTimeout(() => {
        this.organismEl.scrollIntoView();
      }, 100);
    }
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

  /**
   * Use the name of the the organism to create an element id
   */
  getElementIdFromName() {
    return this.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/ig,'')
      .trim()
      .replace(/\s+/g, '-');
  }

  componentDidLoad() {
    //                                 /
    //                       __       //
    //                       -\~,\=\ //
    //                     --=_\=---//=
    //                   -_ =/  \/ //\/
    //                   _,~/   |_   _|\,
    //      __          ,/_/    \' | `/_
    //     //\\          /       | | |\_
    //    /(\ _\________/        (,_,)`
    //   J(\_/                       \
    //  ,)\/     v                \   |
    //  / Y      (         Y       | /J
    // (7 |       \        |       '/ \
    // '| (       /\_______\_     _Y_  \
    //  'Y \     / \     7   \   /   \  \
    //  ',) (   /   )   /    |  /    (  )
    //    '~(  )   / __/     i J     / /    -Anna Eklund-
    //      \  /   \ \       | |   _/ /
    //      | |     )_\_     )_\_/__\/
    //      /_\     |___\    |___\
    //     (___)
    this.organismEl.id = this.getElementIdFromName();
    if (`#${this.organismEl.id}` === window.location.hash || window.location.hash === '#all') {
      this.viewMore({
        scrollIntoView: !(window.location.hash === '#all')
      });
    }
  }

  render() {
    return (
      <div class={this.synopsisMode ? 'synopsis' : this.fullscreenMode ? "flex-grid fullscreen" : "flex-grid"}>
        <div class="col info">
          <a href={`#${this.getElementIdFromName()}`} class="more-button" onClick={() => this.viewMore()}>More</a>
          <a href="javascript:void(0)" class="less-button" onClick={() => this.viewLess()}>Less</a>
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
          <a href="javascript:void(0)" class="resize-button" onClick={event => this.resizeToggle(event)}>
              <span>{this.frameSize.width}px X {this.frameSize.height}px</span>
              <b>{this.fullscreenMode ? '[shrink]' : '[EXPAND]' }️</b>
            </a>
        </div>
      </div>
    );
  }
}
