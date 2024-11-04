import styles from './usernameField.css';
//no usa data
export class UsernameField extends HTMLElement {
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
					<label for="username" class="input-label">Username</label>
					<input type="text" id="username" class="input-field" placeholder="Enter your username" />
				</div>
			`;
		}
	}
}

customElements.define('username-field', UsernameField);
