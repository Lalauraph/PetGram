import { addObserver, appState, dispatch } from '../../store/store';
// import { changeBackground } from '../../store/actions'; //importo la acción

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
		if (this.shadowRoot) this.shadowRoot.innerHTML = `<h1>Hola</h1>`;
		console.log(appState); //imprimir lo que hay en el estado global
		//crear un boton:
		const btn = this.ownerDocument.createElement('button');
		btn.innerHTML = 'cambiar background';
		btn.addEventListener('click', () => {
			// dispatch(changeBackground('red'));
		});
		this.shadowRoot?.appendChild(btn);
	}
}

customElements.define('app-landing', landing);

export default landing;