import styles from './passwordField.css';

export class PasswordField extends HTMLElement {
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
				<div class="input-container">
					<label for="password" class="input-label">Password</label>
					<input type="password" id="password" class="input-field" placeholder="Enter your password" />
				</div>
			`;
		}
	}
}

customElements.define('password-field', PasswordField);
