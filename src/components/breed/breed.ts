import styles from './breed.css';

export enum AttributeBreed {
	'breed' = 'breed',
}

export class breedCard extends HTMLElement {
	breed?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeBreed, null> = {
			breed: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: AttributeBreed, oldValue: string | undefined, newValue: string | undefined) {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <style>
        ${styles}
      </style>
   <div id="breed-container">
   <h4>${this.breed}</h4>
   <img id="icono" src="https://imgur.com/Ab1iOza.png">
   </div>

      `;
		}
	}
}

customElements.define('breed-card', breedCard);
