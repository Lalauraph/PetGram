import { InputField } from '../../components/InputField/InputField';
import { LoginButton } from '../../components/loginButton/loginButton';
import { LoginLink } from '../../components/LoginLink/LoginLink';
import styles from './login-screen.css';

export class LoginScreen extends HTMLElement {
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
				<div class="login-container">
					<div class="login-modal">
						<login-title></login-title>
						<input-field placeholder="Username"></input-field>
						<input-field placeholder="Password"></input-field>
						<login-link></login-link>
						<login-button></login-button>
					</div>
				</div>
			`;
		}
	}
}

customElements.define('login-screen', LoginScreen);
