import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './login.css';
import { dispatch } from '../../store/store';
import { navigate } from '../../store/actions';
import '../components/usernameField'; 
import '../components/passwordField'; 
import '../components/loginButton';


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