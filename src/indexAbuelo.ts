//importar todas las pantallas
import './screens/addPost';
import './screens/createAccount';
import './screens/editProfile';
import './screens/editProfilePicture';
import './screens/feed';
import './screens/landing';
import './screens/login';
import './screens/myPostView';
import './screens/myProfile';
import './screens/profileSetup';
import './screens/register';
import './screens/singlePost';
import './screens/userProfile';

//importar lo de store
import { addObserver } from './store/store';
import { appState } from './store/store';

// Crear el App container
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ''; // Limpiar el contenido anterior
		}

		switch (appState.screen) {
			case 'LOGIN':
				const login = document.createElement('login-screen');
				this.shadowRoot?.appendChild(login);
				break;

			case 'REGISTER':
				const register = document.createElement('register-screen');
				this.shadowRoot?.appendChild(register);
				break;

			case 'FEED':
				const feed = document.createElement('feed-container');
				this.shadowRoot?.appendChild(feed);
				break;

			case 'LANDING':
				const landing = document.createElement('app-landing');
				this.shadowRoot?.appendChild(landing);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
