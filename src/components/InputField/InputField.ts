import styles from './input-field.css';

export enum AttributeInput {
	'placeholder' = 'placeholder',
}

export class InputField extends HTMLElement {
	placeholder?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeInput, null> = {
			placeholder: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: string, _: string | undefined, newValue: string | undefined) {
		if (propName === AttributeInput.placeholder) {
			this.placeholder = newValue;
			this.render();
		}
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
				<input class="input-field" type="text" placeholder="${this.placeholder || ''}">
			`;
		}
	}
}

customElements.define('input-field', InputField);
