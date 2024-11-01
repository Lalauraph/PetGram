// determina qué pantalla debe pintar
import './screens/landing';
import './screens/login';
import './screens/feed';
import { addObserver } from './store/store';
import { appState } from './store/store';

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
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		console.log(appState);

		switch (appState.screen) {
			case 'LOGIN':
				const login = this.ownerDocument.createElement('app-login');
				this.shadowRoot?.appendChild(login);
				break;

			case 'FEED':
				const feed = this.ownerDocument.createElement('app-feed');
				this.shadowRoot?.appendChild(feed);
				break;

			case 'LANDING':
				const landing = this.ownerDocument.createElement('app-landing');
				this.shadowRoot?.appendChild(landing);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
