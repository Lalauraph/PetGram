import styles from './modal-container.css';

export class ModalContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>
					${styles}
				</style>
				<div class="modal-overlay">
					<div class="modal-content">
						<button class="close-button">✖</button>
						<slot></slot> <!-- Espacio para otros componentes dentro del modal -->
					</div>
				</div>
			`;
		}
	}
}

customElements.define('modal-container', ModalContainer);
