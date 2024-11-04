export class selectFromDevice extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
              <div class="container">
            <img id="icono" src="https://imgur.com/13RUNz5.png">
            <h4>Select a photo from your device!</h4>
              </div>
          `;
		}
	}
}

customElements.define('select-from-device', selectFromDevice);
