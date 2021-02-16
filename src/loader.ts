import { LitElement, html, customElement, property, css, CSSResult } from 'lit-element';
import styleTvH from './loader.css';
import { invoke } from 'q';

@customElement('ansi-loader')
class AnsiLoader extends LitElement {
  @property() size = '32px';

  static get styles() {
    console.log('styleTvH', styleTvH);
    debugger;
    return css([styleTvH] as any);
  }
  //static styles = styleTvH as any;

  render() {
    console.log('styles', AnsiLoader.styles);

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
