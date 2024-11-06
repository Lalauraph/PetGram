import { PostCard } from '../../data/dataPostCard';
import { Profile } from '../../data/dataProfile';
import { profileBanner } from '../../components/exportComponents';
import { postCard } from '../../components/exportComponents';
import { welcomeMessage } from '../../components/exportComponents';
import { addPostButton } from '../../components/exportComponents';
import '../../components/exportComponents';

// Crear el App container
class Feed extends HTMLElement {
	postCard: postCard[] = [];
	profileBanner: profileBanner[] = [];
	welcomeMessage: welcomeMessage[] = [];
	addPostButton!: addPostButton;
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Crear los componentes
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
		console.log('renderizando');
		if (this.shadowRoot) {
			this.profileBanner.forEach((profileBanner) => {
				this.shadowRoot?.appendChild(profileBanner);
			});
			this.welcomeMessage.forEach((welcomeMessage) => {
				this.shadowRoot?.appendChild(welcomeMessage);
			});
			this.shadowRoot?.appendChild(this.addPostButton);

			// Crear un div para envolver las tarjetas
			const columnDiv = document.createElement('div');
			columnDiv.style.display = 'grid'; // Usamos grid para el diseño de las tarjetas
			columnDiv.style.gridTemplateColumns = '1fr'; // Por defecto, una columna
			columnDiv.style.gap = '15px'; // Espacio entre las tarjetas
			columnDiv.style.justifyContent = 'center'; // Centramos el grid
			columnDiv.style.margin = '0 auto'; // Centramos el contenedor
			columnDiv.style.maxWidth = '1300px'; // Ancho máximo del contenedor
			columnDiv.style.padding = '20px'; // Espaciado interno

			const mediaQuery = window.matchMedia('(min-width: 1024px)');
			if (mediaQuery.matches) {
				columnDiv.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Cambiamos a dos columnas en pantallas grandes
			}

			this.postCard.forEach((postCard) => {
				columnDiv.appendChild(postCard);
			});

			this.shadowRoot.appendChild(columnDiv);
		}
	}
}

customElements.define('app-feed', Feed);

export default Feed;
