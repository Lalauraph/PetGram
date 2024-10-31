import styles from './login-button.css';

export class LoginButton extends HTMLElement {
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
				<style>
					${styles}
				</style>
				<button class="login-button">Log in!</button>
			`;
		}
	}
}

customElements.define('login-button', LoginButton);
