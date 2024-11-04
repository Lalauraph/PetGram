import styles from './login.css';
import '../../components/indexPadre';

class LoginScreen extends HTMLElement {
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
					${styles.default ? styles.default : styles}
				</style>
				<div class="login-container">
					<div class="login-modal">
					<h1 class="login-title">Login</h1>
						<login-title></login-title>
						<input-field placeholder="Username"></input-field>
						<input-field placeholder="Password" type="password"></input-field>
						<login-link></login-link>
						<login-button></login-button>
					</div>
				</div>
			`;
		}
	}
}

customElements.define('login-screen', LoginScreen);

export default LoginScreen;