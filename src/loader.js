class AnsiLoader extends HTMLElement {
    constructor() {
        super();
        const size = this.getAttribute('data-size') || '16px';
        console.log('size', size);
        this.createDomStructure(size);
        return this;
    }
    createDomStructure(size) {
        this.attachShadow({ mode: 'open' });
        const containerElem = document.createElement('div');
        containerElem.setAttribute('class', 'container');
        const styleElem = document.createElement('style');
        styleElem.textContent = this.createStyle(size);
        this.shadowRoot.append(styleElem, containerElem);
    }
    constKeyFrames() {
        return `@keyframes swapDots {
      10% { content: "⠋"; }
      20% { content: "⠙"; }
      30% { content: "⠹"; }
      40% { content: "⠸"; }
      50% { content: "⠼"; }
      60% { content: "⠴"; }
      70% { content: "⠦"; }
      80% { content: 	"⠧"; }
      90% { content: 	"⠇"; }
      100% { content: "⠏"; }
    }`;
    }
    createStyle(size) {
        return `
      ${this.constKeyFrames()}

      .container::after {
        animation: swapDots 700ms linear infinite;
        display: inline-block;
        content: "⠋";
        font-size: ${size};
        line-hight: ${size};
        background: inherit;
      }
    `;
    }
}
console.log('from package: ansi-loader');
customElements.define('ansi-loader', AnsiLoader);
