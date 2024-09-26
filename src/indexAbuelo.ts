import { PostCard } from './data/dataPostCard';
import { Profile } from './data/dataProfile';
import './components/indexPadre';
import { profileBanner, Attribute4 } from './components/4.profile-banner/profile-banner';
import { postCard } from './components/indexPadre';

// Crear el App container
class AppContainer extends HTMLElement {
	postCard: postCard[] = [];
	profileBanner: profileBanner[] = [];
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
			this.postCard.forEach((postCard) => {
				this.shadowRoot?.appendChild(postCard);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
