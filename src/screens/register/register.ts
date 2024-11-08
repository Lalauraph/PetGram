import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { dispatch } from '../../store/store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/types';
import { InputField, CheckboxField, SignupButton } from '../../components/exportComponents';
import styles from './register.css';

// Configuración de Firebase
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

//Crear clase de pantalla
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

	//petición
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
				${styles}
				</style>
				<div class="register-container">
					<div class="register-modal">
						<h1 class="register-title">Register</h1>
						<form id="registerForm">
							<input type="email" id="email" placeholder="Email" required>
							<input type="password" id="password" placeholder="Password" required>
							<button type="submit">Register</button>
						</form>
						<button class="login-button" id="loginButton">Go to Login</button>
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
