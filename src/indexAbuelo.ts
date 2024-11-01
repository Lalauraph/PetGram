import './screens/landing/landing';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		//creo pantalla landing
		const landing = this.ownerDocument.createElement('app-landing');
		this.shadowRoot?.appendChild(landing);
	}
}

customElements.define('app-container', AppContainer);
