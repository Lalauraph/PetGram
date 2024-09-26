import { PostCard } from './data/dataPostCard';
import { Profile } from './data/dataProfile';
import './components/indexPadre';
import { profileBanner } from './components/4.profile-banner/profile-banner';
import { postCard } from './components/7.post-card/post-card';
import { welcomeMessage } from './components/13.welcome-message/welcome-message';
import { addPostButton } from './components/6.add-post-button/add-post-button';
// Crear el App container
class AppContainer extends HTMLElement {
	postCard: postCard[] = [];
	profileBanner: profileBanner[] = [];
	welcomeMessage: welcomeMessage[] = [];
	addPostButton!: addPostButton;
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Crear el componente profile-banner

		Profile.forEach((user) => {
			const profileBanner = document.createElement('profile-banner') as profileBanner;
			profileBanner.profilePic = user.profilePic;
			profileBanner.name = user.name;
			this.profileBanner.push(profileBanner);
		});

		PostCard.forEach((card) => {
			const postCard = document.createElement('post-card') as postCard;
			postCard.profilePicture = card.profilePicture;
			postCard.postPicture = card.postPicture;
			postCard.name = card.name;
			postCard.breed = card.breed;
			postCard.caption = card.caption;
			this.postCard.push(postCard);
		});

		Profile.forEach((user) => {
			const welcomeMessage = document.createElement('welcome-message') as welcomeMessage;
			welcomeMessage.name = user.name;
			this.welcomeMessage.push(welcomeMessage);
		});

		this.addPostButton = document.createElement('add-post-button') as addPostButton;
	}

	connectedCallback() {
		this.renderizar();
	}

	renderizar() {
		if (this.shadowRoot) {
			// this.shadowRoot.innerHTML = `<h1>TEST</h1>`;
			this.profileBanner.forEach((profileBanner) => {
				this.shadowRoot?.appendChild(profileBanner);
			});
			this.shadowRoot?.appendChild(this.addPostButton);
			this.welcomeMessage.forEach((welcomeMessage) => {
				this.shadowRoot?.appendChild(welcomeMessage);
			});

			this.postCard.forEach((postCard) => {
				this.shadowRoot?.appendChild(postCard);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
