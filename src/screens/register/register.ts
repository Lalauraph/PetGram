import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './register.css';
import { dispatch } from '../../store/store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/types';

// Configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
	apiKey: 'AIzaSyBkaBsPm_SGn_Ax34BUefRZ0Guj_Li0KLA',
	authDomain: 'petgram-1a5f9.firebaseapp.com',
	projectId: 'petgram-1a5f9',
	storageBucket: 'petgram-1a5f9.firebasestorage.app',
	messagingSenderId: '489760332429',
	appId: '1:489760332429:web:8ab0948a178ef92e60a0c4',
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class RegisterScreen extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.handleRegister = this.handleRegister.bind(this);
		this.navigateToLogin = this.navigateToLogin.bind(this);
	}

	connectedCallback() {
		this.render();
	}

	async handleRegister(event: Event) {
		event.preventDefault();
		const email = this.shadowRoot?.querySelector<HTMLInputElement>('#email')?.value || '';
		const password = this.shadowRoot?.querySelector<HTMLInputElement>('#password')?.value || '';

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			dispatch(navigate(Screens.FEED));
			alert('Registro exitoso');
		} catch (error: any) {
			console.error('Error during registration:', error);
			alert('Error al registrarse: ' + error.message);
		}
	}

	navigateToLogin() {
		dispatch(navigate(Screens.LOGIN));
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>
					/* Estilos básicos */
					.register-container {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
						background-color: #f0f0f0;
					}
					.register-modal {
						background-color: white;
						padding: 2rem;
						border-radius: 8px;
						box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
					}
					.register-modal h1 {
						text-align: center;
						margin-bottom: 1rem;
					}
					.register-modal input {
						display: block;
						width: 100%;
						margin-bottom: 1rem;
						padding: 0.5rem;
						border: 1px solid #ccc;
						border-radius: 4px;
					}
					.register-modal button {
						width: 100%;
						padding: 0.5rem;
						margin-bottom: 0.5rem;
						background-color: #28a745;
						color: white;
						border: none;
						border-radius: 4px;
						cursor: pointer;
					}
					.register-modal button:hover {
						background-color: #218838;
					
				<div class="register-container">
					<div class="register-modal">
						<h1 class="register-title">Register</h1>
						<form id="registerForm">
							<input type="email" id="email" placeholder="correo" required>
							<input type="password" id="password" placeholder="Password" required>
							<button type="submit">Register</button>
						</form>
						<button class="login-button" id="loginButton">Go to caracas</button>
					</div>
				</div>
			`;

			const form = this.shadowRoot.querySelector('#registerForm');
			form?.addEventListener('submit', this.handleRegister);

			const loginButton = this.shadowRoot.querySelector('#loginButton');
			loginButton?.addEventListener('click', this.navigateToLogin);
		}
	}
}

customElements.define('register-screen', RegisterScreen);

export default RegisterScreen;
