import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { dispatch } from '../../store/store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/types';
import '../../components/InputField';
import '../../components/CheckboxField';
import '../../components/SignupButton';

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
        const email = (this.shadowRoot?.querySelector('input-field[label="Email address"] input') as HTMLInputElement)?.value || '';
        const password = (this.shadowRoot?.querySelector('input-field[label="Password"] input') as HTMLInputElement)?.value || '';

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(navigate(Screens.FEED));
            alert('Registro exitoso');
        } catch (error: any) {
            console.error('Error durante el registro:', error);
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
                    .register-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: #ffecd1;
                    }
                    .register-modal {
                        background-color: #4da6ff;
                        padding: 20px;
                        border-radius: 10px;
                        max-width: 400px;
                        width: 100%;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: white;
                        font-size: 1.5em;
                        margin-bottom: 20px;
                    }
                    .login-button {
                        margin-top: 10px;
                        background-color: #333;
                        color: white;
                        border: none;
                        padding: 10px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                </style>

                <div class="register-container">
                    <div class="register-modal">
                        <h1>Register</h1>
                        <form id="registerForm">
                            <input-field label="Email address"></input-field>
                            <input-field label="Username"></input-field>
                            <input-field label="Password" type="password"></input-field>
                            <checkbox-field label="I’m at least 18 years old and accept the Terms of Use"></checkbox-field>
                            <checkbox-field label="I accept the Privacy Policy and consent to the processing of my personal information in accordance with it"></checkbox-field>
                            <signup-button></signup-button>
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
