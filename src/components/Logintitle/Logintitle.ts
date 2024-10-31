import styles from './login-title.css';

export class LoginTitle extends HTMLElement {
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
				<h1 class="title">Welcome Back!</h1>
			`;
		}
	}
}

customElements.define('login-title', LoginTitle);
