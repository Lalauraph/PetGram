// Importar los componentes a usar
import { profileBanner } from '../../components/exportComponents';
import { selectFromDevice } from '../../components/exportComponents';
import { descriptionField } from '../../components/exportComponents';
import { welcomeMessage } from '../../components/exportComponents';
import styles from './landing.css';

import { Profile } from '../../data/dataProfile';

// Crear el App container
export class Landing extends HTMLElement {
	profilebanner!: profileBanner;
	selectfromdevice!: selectFromDevice;
	descriptionfield!: descriptionField;
	welcomemessage: welcomeMessage[] = [];
	name?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Crear componente profileBanner
		this.profilebanner = document.createElement('profile-banner') as profileBanner;

		// Crear el componente select from device
		this.selectfromdevice = document.createElement('selectfrom-device') as selectFromDevice;

		//crear el componente descriptionfield
		this.descriptionfield = document.createElement('description-field') as descriptionField;

		//crear el componente welcomeMessage y pushearle el username de la data
		Profile.forEach((user) => {
			const welcomeMessage = document.createElement('welcome-message') as welcomeMessage;
			welcomeMessage.name = user.name;
			this.welcomemessage.push(welcomeMessage);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		// agregar los componentes al DOM
		{
			if (this.shadowRoot) {
				this.shadowRoot.innerHTML = `
					<style>
					${styles}
					</style>

					<div class="addPost-container">
						<profile-banner></profile-banner>
						<welcome-message${this.name}></welcome-message>
<selectfrom-device></selectfrom-device>
<description-field></description-field>

						</div>
					</div>
				`;
			}
		}
	}
} //falta hacer que los botones funcionen y me lleven a otra pantalla

//exportar pantalla como elemento personalizado
customElements.define('landing-screen', Landing);
export default Landing;
