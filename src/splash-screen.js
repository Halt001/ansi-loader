class SplashScreen extends HTMLElement {
    constructor() {
        super();
        this.createDomStructure();
        return this;
    }
    createDomStructure() {
        this.attachShadow({ mode: 'open' });
        const containerElem = document.createElement('div');
        containerElem.setAttribute('class', 'splash-container');
        containerElem.appendChild(document.createElement('slot'));
        const styleElem = document.createElement('style');
        styleElem.textContent = this.createStyle();
        this.shadowRoot.append(styleElem, containerElem);
    }
    createStyle() {
        return `
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
    `;
    }
}
console.log('from package: plash-screen');
customElements.define('splash-screen', SplashScreen);
