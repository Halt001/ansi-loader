import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('ansi-loader')
class AnsiLoader extends LitElement {
  @property() size = '32px';

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

  render() {
    return html`
      <style>
        .container::after {
          font-size: ${this.size};
          line-height: ${this.size};
        }
      </style>

      <div class="container"></div>
    `;
  }
}
