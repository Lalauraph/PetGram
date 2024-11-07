// Importar los componentes a usar
import { introBanner } from '../../components/exportComponents';
import { createAccountButton } from '../../components/exportComponents';
import { selectFromDevice } from '../../components/exportComponents';
import { descriptionField } from '../../components/exportComponents';
import styles from './landing.css';

// Crear el App container
export class Landing extends HTMLElement {
	introbanner!: introBanner;
	createaccountbutton!: createAccountButton;
	selectfromdevice!: selectFromDevice;
	descriptionfield!: descriptionField;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Crear componente introBanner
		this.introbanner = document.createElement('intro-banner') as introBanner;

		// Crear el componente createAccountButton
		this.createaccountbutton = document.createElement('create-account') as createAccountButton;

		// Crear el componente select from device
		this.selectfromdevice = document.createElement('selectfrom-device') as selectFromDevice;

		//crear el componente descriptionfield
		this.descriptionfield = document.createElement('description-field') as descriptionField;
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

					<div class="profileSetup-Container">
						<intro-banner></intro-banner>
						<h1>Almost done!</h1>
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
