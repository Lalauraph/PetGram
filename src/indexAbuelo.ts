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

	//crear las pantallas
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ''; // Limpiar el contenido anterior
			console.log(appState);
		}
		console.log(appState);

		switch (appState.screen) {
			//donde inicia la página: en la pantalla landing

			case 'LANDING':
				const landing = document.createElement('landing-screen');
				this.shadowRoot?.appendChild(landing);
				break;

			case 'ADDPOST':
				const addPost = document.createElement('addPost-screen');
				this.shadowRoot?.appendChild(addPost);
				break;

			case 'CREATEACCOUNT':
				const createAccount = document.createElement('createAccpunt-screen');
				this.shadowRoot?.appendChild(createAccount);
				break;

			case 'EDITPROFILE':
				const editProfile = document.createElement('editProfile-screen');
				this.shadowRoot?.appendChild(editProfile);
				break;

			case 'EDITPROFILEPICTURE':
				const editProfilePicture = document.createElement('editProfilePicture-screen');
				this.shadowRoot?.appendChild(editProfilePicture);
				break;

			case 'FEED':
				const feed = document.createElement('feed-container');
				this.shadowRoot?.appendChild(feed);
				break;

			case 'LOGIN':
				const login = document.createElement('login-screen');
				this.shadowRoot?.appendChild(login);
				break;

			case 'MYPOSTVIEW':
				const myPostView = document.createElement('myPostView-screen');
				this.shadowRoot?.appendChild(myPostView);
				break;

			case 'MYPROFILE':
				const myProfile = document.createElement('myProfile-screen');
				this.shadowRoot?.appendChild(myProfile);
				break;

			case 'PROFILESETUP':
				const profileSetup = document.createElement('profileSetup-screen');
				this.shadowRoot?.appendChild(profileSetup);
				break;

			case 'REGISTER':
				const register = document.createElement('register-screen');
				this.shadowRoot?.appendChild(register);
				break;

			case 'SINGLEPOST':
				const singlePost = document.createElement('singlePost-screen');
				this.shadowRoot?.appendChild(singlePost);
				break;

			case 'USERPROFILE':
				const userProfile = document.createElement('userProfile-screen');
				this.shadowRoot?.appendChild(userProfile);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
