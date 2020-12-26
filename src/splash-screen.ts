import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('ansi-loader-splash')
class AnsiLoaderSplash extends LitElement {
  @property() text = 'Loading...';

  static get styles() {
    return css`
      .splash-container {
        position: absolute;
        z-index: 99999;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: #397cc6;
        font-family: 'arial';
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        min-width: 100vh;
        font-size: 20px;
        background: #fff;
      }
      .splash-container p {
        margin-right: 1rem;
      }
    `;
  }

  render() {
    return html`
      <div class="splash-container">
        <p>${this.text}</p>
        <ansi-loader></ansi-loader>
      </div>
    `;
  }
}
