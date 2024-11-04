import { addObserver } from './store/store';
import { appState } from './store/store';
import './screens/indexPadre';
import './screens/login/login';

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
