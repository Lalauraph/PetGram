import styles from './profile-banner.css';

export enum Attribute {
	'profilePic' = 'profilePic',
	'name' = 'name',
}

export class profileBanner extends HTMLElement {
	profilePic?: string;
	name?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			profilePic: null,
			name: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.profilePic:
				this.profilePic = newValue;
				break;
			case Attribute.name:
				this.name = newValue;
				break;
			default:
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
        <style>
          ${styles}
        </style>
        <section class="top-banner">
          <div class="user">
            <img class="Profile-Pic" src="${this.profilePic}" alt="Profile Pic">
						<h3>${this.name}</h3>
          </div>
          <img id="logo" src="https://i.imgur.com/lvK6X2s.png">
          <form id="search-form">
            <input type="text" name="search" placeholder="Search...">
          </form>
        </section>
      `;
		}
	}
}

customElements.define('profile-banner', profileBanner);
