import styles from './login-link.css';

export class LoginLink extends HTMLElement {
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
				<p class="link-text">
					Do not have an account yet? <a href="#" class="create-link">Create one!</a>
				</p>
			`;
		}
	}
}

customElements.define('login-link', LoginLink);
