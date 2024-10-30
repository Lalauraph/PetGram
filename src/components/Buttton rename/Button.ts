import styles from './button-style.css';

export enum AttributeButton {
	'label' = 'label',
}

export class CustomButton extends HTMLElement {
	label?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeButton, null> = {
			label: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
		if (propName === AttributeButton.label) {
			this.label = newValue;
			this.render();
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
        <style>
          ${styles}
        </style>
        <button class="custom-button">
          ${this.label}
        </button>
      `;
		}
	}
}

customElements.define('custom-button', CustomButton);
