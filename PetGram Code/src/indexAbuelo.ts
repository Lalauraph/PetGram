import { PostCard } from './data/dataPostCard';
import { Profile } from './data/dataProfile';
import './components/indexPadre';
import { profileBanner, Attribute4 } from './components/4.profile-banner/profile-banner';
import { postCard, Attribute7 } from './components/7.post-card/post-card';

// Crear el App container
class AppContainer extends HTMLElement {
	postCard: postCard[] = [];
	profileBanner: profileBanner[] = [];
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Crear el componente profile-banner
		Profile.forEach((user) => {
			const profileBanner = this.ownerDocument.createElement('profile-banner') as profileBanner;
			profileBanner.profilePic = user.profilePic;
			profileBanner.name = user.name;
			this.profileBanner.push(profileBanner);
		});
	}
}

customElements.define('app-container', AppContainer);
