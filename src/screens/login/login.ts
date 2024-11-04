import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './login.css';
import { dispatch } from '../../store/store';
import { navigate } from '../../store/actions';

// Configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
	apiKey: "AIzaSyBkaBsPm_SGn_Ax34BUefRZ0Guj_Li0KLA",
	authDomain: "petgram-1a5f9.firebaseapp.com",
	projectId: "petgram-1a5f9",
	storageBucket: "petgram-1a5f9.firebasestorage.app",
	messagingSenderId: "489760332429",
	appId: "1:489760332429:web:8ab0948a178ef92e60a0c4"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class LoginScreen extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.handleLogin = this.handleLogin.bind(this);
		this.navigateToRegister = this.navigateToRegister.bind(this);
	}

	connectedCallback() {
		this.render();
	}

	async handleLogin(event: any) {
		event.preventDefault();
		const emailElement = this.shadowRoot?.querySelector('#email') as HTMLInputElement;
		const passwordElement = this.shadowRoot?.querySelector('#password') as HTMLInputElement;
		const email = emailElement.value;
		const password = passwordElement.value;

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			console.log('User signed in:', userCredential.user);
			dispatch(navigate("FEED"));
			alert('Inicio de sesión exitoso');
		} catch (error: any) {
			console.error('Error during login:', error);
			alert('Error al iniciar sesión: ' + error.message);
		}
	}

	navigateToRegister() {
		dispatch(navigate("REGISTER"));
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>
					/* Estilos básicos */
					.login-container {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
						background-color: #f0f0f0;
					}
					.login-modal {
						background-color: white;
						padding: 2rem;
						border-radius: 8px;
						box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
					}
					.login-modal h1 {
						text-align: center;
						margin-bottom: 1rem;
					}
					.login-modal input {
						display: block;
						width: 100%;
						margin-bottom: 1rem;
						padding: 0.5rem;
						border: 1px solid #ccc;
						border-radius: 4px;
					}
					.login-modal button {
						width: 100%;
						padding: 0.5rem;
						margin-bottom: 0.5rem;
						background-color: #007bff;
						color: white;
						border: none;
						border-radius: 4px;
						cursor: pointer;
					}
					.login-modal button:hover {
						background-color: #0056b3;
					}
					.register-button {
						background-color: #28a745;
					}
					.register-button:hover {
						background-color: #218838;
					}
				</style>
				<div class="login-container">
					<div class="login-modal">
						<h1 class="login-title">Login</h1>
						<form id="loginForm">
							<input type="email" id="email" placeholder="Email" required>
							<input type="password" id="password" placeholder="Password" required>
							<button type="submit">Login</button>
						</form>
						<button class="register-button" id="registerButton">Register</button>
					</div>
				</div>
			`;

			const form = this.shadowRoot.querySelector('#loginForm');
			form?.addEventListener('submit', this.handleLogin);

			const registerButton = this.shadowRoot.querySelector('#registerButton');
			registerButton?.addEventListener('click', this.navigateToRegister);
		}
	}
}

customElements.define('login-screen', LoginScreen);

export default LoginScreen;