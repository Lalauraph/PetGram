import { addObserver, appState, dispatch } from '../../store/store';

class landing extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		//le agrego el observador
		addObserver(this); //se le agrega al arreglo de observser esta clase, la landing
		//cuando cambie el store esta pantalla se va a volver a renderizar
	}
	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
		//crear un boton:
		const btn = this.ownerDocument.createElement('button');
		btn.innerHTML = 'cambiar background';
	}
}

customElements.define('app-landing', landing);
