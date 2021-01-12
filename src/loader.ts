import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('ansi-loader')
class AnsiLoader extends LitElement {
  @property() size = '32px';

  private timeStart = Date.now();

  constructor() {
    super();
    console.log('Ansi-Loader constructor');
  }

  static get styles() {
    return css`
      @keyframes swapDots {
        10% { content: "⠋"; }
        20% { content: "⠙"; }
        30% { content: "⠹"; }
        40% { content: "⠸"; }
        50% { content: "⠼"; }
        60% { content: "⠴"; }
        70% { content: "⠦"; }
        80% { content: "⠧"; }
        90% { content: "⠇"; }
       100% { content: "⠏"; }
      }

      .container::after {
        animation: swapDots 700ms linear infinite;
        display: inline-block;
        content: "⠋";
        background: inherit;
      }
    `;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change: ', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render() {
    return html`
      <style>
        .container::after {
          font-size: ${this.size};
          line-height: ${this.size};
        }
      </style>

      <div class="container" @click="${this.handleClick}"></div>
    `;
  }

  handleClick() {
    console.log('clicked ansi-loader');
    this.sendTimeEvent();
  }

  sendTimeEvent() {
    const duration = Date.now() - this.timeStart;

    let event = new CustomEvent('duration', {
      detail: {
        duration,
        timeStart: this.timeStart,
      }
    });
    this.dispatchEvent(event);
  }
}
