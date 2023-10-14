import "./components/export"
import "./types/Tarjeta"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
        this.innerHTML
    }
}

customElements.define('app-container', AppContainer)