import styles from './add-post-button.css';

export class addPostButton extends HTMLElement {
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
 <button id="addPostBtn">Add Post</button>
      `;
		}
	}
}

customElements.define('add-post-button', addPostButton);
